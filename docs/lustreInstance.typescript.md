# `lustreInstance` Submodule <a name="`lustreInstance` Submodule" id="@cdktn/provider-google.lustreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LustreInstance <a name="LustreInstance" id="@cdktn/provider-google.lustreInstance.LustreInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance google_lustre_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

new lustreInstance.LustreInstance(scope: Construct, id: string, config: LustreInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig">LustreInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.lustreInstance.LustreInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig">LustreInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.putAccessRulesOptions">putAccessRulesOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.putDynamicTierOptions">putDynamicTierOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.putMaintenancePolicy">putMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetAccessRulesOptions">resetAccessRulesOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetDynamicTierOptions">resetDynamicTierOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetGkeSupportEnabled">resetGkeSupportEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetMaintenancePolicy">resetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetPerUnitStorageThroughput">resetPerUnitStorageThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetPlacementPolicy">resetPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lustreInstance.LustreInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.lustreInstance.LustreInstance.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.lustreInstance.LustreInstance.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.lustreInstance.LustreInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.lustreInstance.LustreInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lustreInstance.LustreInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.lustreInstance.LustreInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.lustreInstance.LustreInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.lustreInstance.LustreInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.lustreInstance.LustreInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.lustreInstance.LustreInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.lustreInstance.LustreInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.lustreInstance.LustreInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.lustreInstance.LustreInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.lustreInstance.LustreInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.lustreInstance.LustreInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.lustreInstance.LustreInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.lustreInstance.LustreInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.lustreInstance.LustreInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.lustreInstance.LustreInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.lustreInstance.LustreInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.lustreInstance.LustreInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.lustreInstance.LustreInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.lustreInstance.LustreInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessRulesOptions` <a name="putAccessRulesOptions" id="@cdktn/provider-google.lustreInstance.LustreInstance.putAccessRulesOptions"></a>

```typescript
public putAccessRulesOptions(value: LustreInstanceAccessRulesOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lustreInstance.LustreInstance.putAccessRulesOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions">LustreInstanceAccessRulesOptions</a>

---

##### `putDynamicTierOptions` <a name="putDynamicTierOptions" id="@cdktn/provider-google.lustreInstance.LustreInstance.putDynamicTierOptions"></a>

```typescript
public putDynamicTierOptions(value: LustreInstanceDynamicTierOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lustreInstance.LustreInstance.putDynamicTierOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions">LustreInstanceDynamicTierOptions</a>

---

##### `putMaintenancePolicy` <a name="putMaintenancePolicy" id="@cdktn/provider-google.lustreInstance.LustreInstance.putMaintenancePolicy"></a>

```typescript
public putMaintenancePolicy(value: LustreInstanceMaintenancePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lustreInstance.LustreInstance.putMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy">LustreInstanceMaintenancePolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.lustreInstance.LustreInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: LustreInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lustreInstance.LustreInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts">LustreInstanceTimeouts</a>

---

##### `resetAccessRulesOptions` <a name="resetAccessRulesOptions" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetAccessRulesOptions"></a>

```typescript
public resetAccessRulesOptions(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDynamicTierOptions` <a name="resetDynamicTierOptions" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetDynamicTierOptions"></a>

```typescript
public resetDynamicTierOptions(): void
```

##### `resetGkeSupportEnabled` <a name="resetGkeSupportEnabled" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetGkeSupportEnabled"></a>

```typescript
public resetGkeSupportEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMaintenancePolicy` <a name="resetMaintenancePolicy" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetMaintenancePolicy"></a>

```typescript
public resetMaintenancePolicy(): void
```

##### `resetPerUnitStorageThroughput` <a name="resetPerUnitStorageThroughput" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetPerUnitStorageThroughput"></a>

```typescript
public resetPerUnitStorageThroughput(): void
```

##### `resetPlacementPolicy` <a name="resetPlacementPolicy" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetPlacementPolicy"></a>

```typescript
public resetPlacementPolicy(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.lustreInstance.LustreInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LustreInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.lustreInstance.LustreInstance.isConstruct"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

lustreInstance.LustreInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.lustreInstance.LustreInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.lustreInstance.LustreInstance.isTerraformElement"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

lustreInstance.LustreInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.lustreInstance.LustreInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstance.isTerraformResource"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

lustreInstance.LustreInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.lustreInstance.LustreInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.lustreInstance.LustreInstance.generateConfigForImport"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

lustreInstance.LustreInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LustreInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.lustreInstance.LustreInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.lustreInstance.LustreInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LustreInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.lustreInstance.LustreInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LustreInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.lustreInstance.LustreInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LustreInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.accessRulesOptions">accessRulesOptions</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference">LustreInstanceAccessRulesOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.dynamicTierOptions">dynamicTierOptions</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference">LustreInstanceDynamicTierOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference">LustreInstanceMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.mountPoint">mountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.stateReason">stateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference">LustreInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.upcomingMaintenanceSchedule">upcomingMaintenanceSchedule</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList">LustreInstanceUpcomingMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.accessRulesOptionsInput">accessRulesOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions">LustreInstanceAccessRulesOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.capacityGibInput">capacityGibInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.dynamicTierOptionsInput">dynamicTierOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions">LustreInstanceDynamicTierOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.filesystemInput">filesystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.gkeSupportEnabledInput">gkeSupportEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.maintenancePolicyInput">maintenancePolicyInput</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy">LustreInstanceMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.perUnitStorageThroughputInput">perUnitStorageThroughputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.placementPolicyInput">placementPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts">LustreInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.capacityGib">capacityGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.filesystem">filesystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.gkeSupportEnabled">gkeSupportEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.perUnitStorageThroughput">perUnitStorageThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.placementPolicy">placementPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessRulesOptions`<sup>Required</sup> <a name="accessRulesOptions" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.accessRulesOptions"></a>

```typescript
public readonly accessRulesOptions: LustreInstanceAccessRulesOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference">LustreInstanceAccessRulesOptionsOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dynamicTierOptions`<sup>Required</sup> <a name="dynamicTierOptions" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.dynamicTierOptions"></a>

```typescript
public readonly dynamicTierOptions: LustreInstanceDynamicTierOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference">LustreInstanceDynamicTierOptionsOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `maintenancePolicy`<sup>Required</sup> <a name="maintenancePolicy" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.maintenancePolicy"></a>

```typescript
public readonly maintenancePolicy: LustreInstanceMaintenancePolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference">LustreInstanceMaintenancePolicyOutputReference</a>

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateReason`<sup>Required</sup> <a name="stateReason" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.stateReason"></a>

```typescript
public readonly stateReason: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.timeouts"></a>

```typescript
public readonly timeouts: LustreInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference">LustreInstanceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `upcomingMaintenanceSchedule`<sup>Required</sup> <a name="upcomingMaintenanceSchedule" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.upcomingMaintenanceSchedule"></a>

```typescript
public readonly upcomingMaintenanceSchedule: LustreInstanceUpcomingMaintenanceScheduleList;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList">LustreInstanceUpcomingMaintenanceScheduleList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `accessRulesOptionsInput`<sup>Optional</sup> <a name="accessRulesOptionsInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.accessRulesOptionsInput"></a>

```typescript
public readonly accessRulesOptionsInput: LustreInstanceAccessRulesOptions;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions">LustreInstanceAccessRulesOptions</a>

---

##### `capacityGibInput`<sup>Optional</sup> <a name="capacityGibInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.capacityGibInput"></a>

```typescript
public readonly capacityGibInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dynamicTierOptionsInput`<sup>Optional</sup> <a name="dynamicTierOptionsInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.dynamicTierOptionsInput"></a>

```typescript
public readonly dynamicTierOptionsInput: LustreInstanceDynamicTierOptions;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions">LustreInstanceDynamicTierOptions</a>

---

##### `filesystemInput`<sup>Optional</sup> <a name="filesystemInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.filesystemInput"></a>

```typescript
public readonly filesystemInput: string;
```

- *Type:* string

---

##### `gkeSupportEnabledInput`<sup>Optional</sup> <a name="gkeSupportEnabledInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.gkeSupportEnabledInput"></a>

```typescript
public readonly gkeSupportEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maintenancePolicyInput`<sup>Optional</sup> <a name="maintenancePolicyInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.maintenancePolicyInput"></a>

```typescript
public readonly maintenancePolicyInput: LustreInstanceMaintenancePolicy;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy">LustreInstanceMaintenancePolicy</a>

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `perUnitStorageThroughputInput`<sup>Optional</sup> <a name="perUnitStorageThroughputInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.perUnitStorageThroughputInput"></a>

```typescript
public readonly perUnitStorageThroughputInput: string;
```

- *Type:* string

---

##### `placementPolicyInput`<sup>Optional</sup> <a name="placementPolicyInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.placementPolicyInput"></a>

```typescript
public readonly placementPolicyInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LustreInstanceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts">LustreInstanceTimeouts</a>

---

##### `capacityGib`<sup>Required</sup> <a name="capacityGib" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.capacityGib"></a>

```typescript
public readonly capacityGib: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `filesystem`<sup>Required</sup> <a name="filesystem" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.filesystem"></a>

```typescript
public readonly filesystem: string;
```

- *Type:* string

---

##### `gkeSupportEnabled`<sup>Required</sup> <a name="gkeSupportEnabled" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.gkeSupportEnabled"></a>

```typescript
public readonly gkeSupportEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `perUnitStorageThroughput`<sup>Required</sup> <a name="perUnitStorageThroughput" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.perUnitStorageThroughput"></a>

```typescript
public readonly perUnitStorageThroughput: string;
```

- *Type:* string

---

##### `placementPolicy`<sup>Required</sup> <a name="placementPolicy" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.placementPolicy"></a>

```typescript
public readonly placementPolicy: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.lustreInstance.LustreInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LustreInstanceAccessRulesOptions <a name="LustreInstanceAccessRulesOptions" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions.Initializer"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

const lustreInstanceAccessRulesOptions: lustreInstance.LustreInstanceAccessRulesOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions.property.defaultSquashMode">defaultSquashMode</a></code> | <code>string</code> | The squash mode for the default access rule. Possible values: NO_SQUASH ROOT_SQUASH. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions.property.accessRules">accessRules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules">LustreInstanceAccessRulesOptionsAccessRules</a>[]</code> | access_rules block. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions.property.defaultSquashGid">defaultSquashGid</a></code> | <code>number</code> | The user squash GID for the default access rule. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions.property.defaultSquashUid">defaultSquashUid</a></code> | <code>number</code> | The user squash UID for the default access rule. |

---

##### `defaultSquashMode`<sup>Required</sup> <a name="defaultSquashMode" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions.property.defaultSquashMode"></a>

```typescript
public readonly defaultSquashMode: string;
```

- *Type:* string

The squash mode for the default access rule. Possible values: NO_SQUASH ROOT_SQUASH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#default_squash_mode LustreInstance#default_squash_mode}

---

##### `accessRules`<sup>Optional</sup> <a name="accessRules" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions.property.accessRules"></a>

```typescript
public readonly accessRules: IResolvable | LustreInstanceAccessRulesOptionsAccessRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules">LustreInstanceAccessRulesOptionsAccessRules</a>[]

access_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#access_rules LustreInstance#access_rules}

---

##### `defaultSquashGid`<sup>Optional</sup> <a name="defaultSquashGid" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions.property.defaultSquashGid"></a>

```typescript
public readonly defaultSquashGid: number;
```

- *Type:* number

The user squash GID for the default access rule.

This user squash GID applies to all root users connecting from clients
that are not matched by any of the access rules. If not set, the default
is 0 (no GID squash).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#default_squash_gid LustreInstance#default_squash_gid}

---

##### `defaultSquashUid`<sup>Optional</sup> <a name="defaultSquashUid" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions.property.defaultSquashUid"></a>

```typescript
public readonly defaultSquashUid: number;
```

- *Type:* number

The user squash UID for the default access rule.

This user squash UID applies to all root users connecting from clients
that are not matched by any of the access rules. If not set, the default
is 0 (no UID squash).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#default_squash_uid LustreInstance#default_squash_uid}

---

### LustreInstanceAccessRulesOptionsAccessRules <a name="LustreInstanceAccessRulesOptionsAccessRules" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules.Initializer"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

const lustreInstanceAccessRulesOptionsAccessRules: lustreInstance.LustreInstanceAccessRulesOptionsAccessRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules.property.ipAddressRanges">ipAddressRanges</a></code> | <code>string[]</code> | The IP address ranges to which to apply this access rule. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules.property.name">name</a></code> | <code>string</code> | The name of the access rule policy group. Must be 16 characters or less and include only alphanumeric characters or '_'. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules.property.squashMode">squashMode</a></code> | <code>string</code> | Squash mode for the access rule. Possible values: NO_SQUASH ROOT_SQUASH. |

---

##### `ipAddressRanges`<sup>Required</sup> <a name="ipAddressRanges" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules.property.ipAddressRanges"></a>

```typescript
public readonly ipAddressRanges: string[];
```

- *Type:* string[]

The IP address ranges to which to apply this access rule.

Accepts
non-overlapping CIDR ranges (e.g., '192.168.1.0/24') and IP addresses
(e.g., '192.168.1.0').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#ip_address_ranges LustreInstance#ip_address_ranges}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the access rule policy group. Must be 16 characters or less and include only alphanumeric characters or '_'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#name LustreInstance#name}

---

##### `squashMode`<sup>Required</sup> <a name="squashMode" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules.property.squashMode"></a>

```typescript
public readonly squashMode: string;
```

- *Type:* string

Squash mode for the access rule. Possible values: NO_SQUASH ROOT_SQUASH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#squash_mode LustreInstance#squash_mode}

---

### LustreInstanceConfig <a name="LustreInstanceConfig" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.Initializer"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

const lustreInstanceConfig: lustreInstance.LustreInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.capacityGib">capacityGib</a></code> | <code>string</code> | The storage capacity of the instance in gibibytes (GiB). |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.filesystem">filesystem</a></code> | <code>string</code> | The filesystem name for this instance. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.instanceId">instanceId</a></code> | <code>string</code> | The name of the Managed Lustre instance. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.network">network</a></code> | <code>string</code> | The full name of the VPC network to which the instance is connected. Must be in the format 'projects/{project_id}/global/networks/{network_name}'. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.accessRulesOptions">accessRulesOptions</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions">LustreInstanceAccessRulesOptions</a></code> | access_rules_options block. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.description">description</a></code> | <code>string</code> | A user-readable description of the instance. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.dynamicTierOptions">dynamicTierOptions</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions">LustreInstanceDynamicTierOptions</a></code> | dynamic_tier_options block. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.gkeSupportEnabled">gkeSupportEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether you want to enable support for GKE clients. By default, GKE clients are not supported. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#id LustreInstance#id}. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.kmsKey">kmsKey</a></code> | <code>string</code> | The Cloud KMS key name to use for data encryption. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy">LustreInstanceMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.perUnitStorageThroughput">perUnitStorageThroughput</a></code> | <code>string</code> | The throughput of the instance in MBps per TiB. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.placementPolicy">placementPolicy</a></code> | <code>string</code> | The placement policy name for the instance in the format of projects/{project}/locations/{location}/resourcePolicies/{resource_policy}. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#project LustreInstance#project}. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts">LustreInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `capacityGib`<sup>Required</sup> <a name="capacityGib" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.capacityGib"></a>

```typescript
public readonly capacityGib: string;
```

- *Type:* string

The storage capacity of the instance in gibibytes (GiB).

Allowed values
are from '9000' to '7632000', depending on the 'perUnitStorageThroughput'.
See [Performance tiers and maximum storage
capacities](https://cloud.google.com/managed-lustre/docs/create-instance#performance-tiers)
for specific minimums, maximums, and step sizes for each performance tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#capacity_gib LustreInstance#capacity_gib}

---

##### `filesystem`<sup>Required</sup> <a name="filesystem" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.filesystem"></a>

```typescript
public readonly filesystem: string;
```

- *Type:* string

The filesystem name for this instance.

This name is used by client-side
tools, including when mounting the instance. Must be eight characters or
less and can only contain letters and numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#filesystem LustreInstance#filesystem}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The name of the Managed Lustre instance.

* Must contain only lowercase letters, numbers, and hyphens.
* Must start with a letter.
* Must be between 1-63 characters.
* Must end with a number or a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#instance_id LustreInstance#instance_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#location LustreInstance#location}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The full name of the VPC network to which the instance is connected. Must be in the format 'projects/{project_id}/global/networks/{network_name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#network LustreInstance#network}

---

##### `accessRulesOptions`<sup>Optional</sup> <a name="accessRulesOptions" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.accessRulesOptions"></a>

```typescript
public readonly accessRulesOptions: LustreInstanceAccessRulesOptions;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions">LustreInstanceAccessRulesOptions</a>

access_rules_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#access_rules_options LustreInstance#access_rules_options}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#deletion_policy LustreInstance#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A user-readable description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#description LustreInstance#description}

---

##### `dynamicTierOptions`<sup>Optional</sup> <a name="dynamicTierOptions" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.dynamicTierOptions"></a>

```typescript
public readonly dynamicTierOptions: LustreInstanceDynamicTierOptions;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions">LustreInstanceDynamicTierOptions</a>

dynamic_tier_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#dynamic_tier_options LustreInstance#dynamic_tier_options}

---

##### `gkeSupportEnabled`<sup>Optional</sup> <a name="gkeSupportEnabled" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.gkeSupportEnabled"></a>

```typescript
public readonly gkeSupportEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether you want to enable support for GKE clients. By default, GKE clients are not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#gke_support_enabled LustreInstance#gke_support_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#id LustreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

The Cloud KMS key name to use for data encryption.

If not set, the instance will use Google-managed encryption keys.
If set, the instance will use customer-managed encryption keys.
The key must be in the same region as the instance.
The key format is:
projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{key}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#kms_key LustreInstance#kms_key}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#labels LustreInstance#labels}

---

##### `maintenancePolicy`<sup>Optional</sup> <a name="maintenancePolicy" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.maintenancePolicy"></a>

```typescript
public readonly maintenancePolicy: LustreInstanceMaintenancePolicy;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy">LustreInstanceMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#maintenance_policy LustreInstance#maintenance_policy}

---

##### `perUnitStorageThroughput`<sup>Optional</sup> <a name="perUnitStorageThroughput" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.perUnitStorageThroughput"></a>

```typescript
public readonly perUnitStorageThroughput: string;
```

- *Type:* string

The throughput of the instance in MBps per TiB.

Valid values are 125, 250,
500, 1000.
See [Performance tiers and maximum storage
capacities](https://cloud.google.com/managed-lustre/docs/create-instance#performance-tiers)
for more information.

If the instance is using the Dynamic tier, this field must not be set or
must be set to zero.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#per_unit_storage_throughput LustreInstance#per_unit_storage_throughput}

---

##### `placementPolicy`<sup>Optional</sup> <a name="placementPolicy" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.placementPolicy"></a>

```typescript
public readonly placementPolicy: string;
```

- *Type:* string

The placement policy name for the instance in the format of projects/{project}/locations/{location}/resourcePolicies/{resource_policy}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#placement_policy LustreInstance#placement_policy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#project LustreInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.lustreInstance.LustreInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LustreInstanceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts">LustreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#timeouts LustreInstance#timeouts}

---

### LustreInstanceDynamicTierOptions <a name="LustreInstanceDynamicTierOptions" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions.Initializer"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

const lustreInstanceDynamicTierOptions: lustreInstance.LustreInstanceDynamicTierOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions.property.mode">mode</a></code> | <code>string</code> | The dynamic tier mode of the instance. Possible values: DISABLED DEFAULT_CACHE. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The dynamic tier mode of the instance. Possible values: DISABLED DEFAULT_CACHE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#mode LustreInstance#mode}

---

### LustreInstanceMaintenancePolicy <a name="LustreInstanceMaintenancePolicy" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy.Initializer"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

const lustreInstanceMaintenancePolicy: lustreInstance.LustreInstanceMaintenancePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy.property.weeklyMaintenanceWindows">weeklyMaintenanceWindows</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a></code> | weekly_maintenance_windows block. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy.property.maintenanceExclusionWindow">maintenanceExclusionWindow</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow">LustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a></code> | maintenance_exclusion_window block. |

---

##### `weeklyMaintenanceWindows`<sup>Required</sup> <a name="weeklyMaintenanceWindows" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy.property.weeklyMaintenanceWindows"></a>

```typescript
public readonly weeklyMaintenanceWindows: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a>

weekly_maintenance_windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#weekly_maintenance_windows LustreInstance#weekly_maintenance_windows}

---

##### `maintenanceExclusionWindow`<sup>Optional</sup> <a name="maintenanceExclusionWindow" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy.property.maintenanceExclusionWindow"></a>

```typescript
public readonly maintenanceExclusionWindow: LustreInstanceMaintenancePolicyMaintenanceExclusionWindow;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow">LustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a>

maintenance_exclusion_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#maintenance_exclusion_window LustreInstance#maintenance_exclusion_window}

---

### LustreInstanceMaintenancePolicyMaintenanceExclusionWindow <a name="LustreInstanceMaintenancePolicyMaintenanceExclusionWindow" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow.Initializer"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

const lustreInstanceMaintenancePolicyMaintenanceExclusionWindow: lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow.property.endDate">endDate</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a></code> | end_date block. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow.property.startDate">startDate</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a></code> | start_date block. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow.property.time">time</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a></code> | time block. |

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow.property.endDate"></a>

```typescript
public readonly endDate: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#end_date LustreInstance#end_date}

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow.property.startDate"></a>

```typescript
public readonly startDate: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#start_date LustreInstance#start_date}

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow.property.time"></a>

```typescript
public readonly time: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a>

time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#time LustreInstance#time}

---

### LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate <a name="LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.Initializer"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

const lustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate: lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.property.day">day</a></code> | <code>number</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.property.month">month</a></code> | <code>number</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.property.year">year</a></code> | <code>number</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't
significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#day LustreInstance#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#month LustreInstance#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#year LustreInstance#year}

---

### LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate <a name="LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.Initializer"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

const lustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate: lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.property.day">day</a></code> | <code>number</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.property.month">month</a></code> | <code>number</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.property.year">year</a></code> | <code>number</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't
significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#day LustreInstance#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#month LustreInstance#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#year LustreInstance#year}

---

### LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime <a name="LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.Initializer"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

const lustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime: lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.hours">hours</a></code> | <code>number</code> | Hours of a day in 24 hour format. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.minutes">minutes</a></code> | <code>number</code> | Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.nanos">nanos</a></code> | <code>number</code> | Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.seconds">seconds</a></code> | <code>number</code> | Seconds of a minute. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

Hours of a day in 24 hour format.

Must be greater than or equal to 0 and
typically must be less than or equal to 23. An API may choose to allow the
value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#hours LustreInstance#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#minutes LustreInstance#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#nanos LustreInstance#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Seconds of a minute.

Must be greater than or equal to 0 and typically must
be less than or equal to 59. An API may allow the value 60 if it allows
leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#seconds LustreInstance#seconds}

---

### LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows <a name="LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows.Initializer"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

const lustreInstanceMaintenancePolicyWeeklyMaintenanceWindows: lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a></code> | start_time block. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#day_of_week LustreInstance#day_of_week}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows.property.startTime"></a>

```typescript
public readonly startTime: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#start_time LustreInstance#start_time}

---

### LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime <a name="LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.Initializer"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

const lustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime: lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.hours">hours</a></code> | <code>number</code> | Hours of a day in 24 hour format. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.minutes">minutes</a></code> | <code>number</code> | Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.nanos">nanos</a></code> | <code>number</code> | Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.seconds">seconds</a></code> | <code>number</code> | Seconds of a minute. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

Hours of a day in 24 hour format.

Must be greater than or equal to 0 and
typically must be less than or equal to 23. An API may choose to allow the
value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#hours LustreInstance#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#minutes LustreInstance#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#nanos LustreInstance#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Seconds of a minute.

Must be greater than or equal to 0 and typically must
be less than or equal to 59. An API may allow the value 60 if it allows
leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#seconds LustreInstance#seconds}

---

### LustreInstanceTimeouts <a name="LustreInstanceTimeouts" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts.Initializer"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

const lustreInstanceTimeouts: lustreInstance.LustreInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#create LustreInstance#create}. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#delete LustreInstance#delete}. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#update LustreInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#create LustreInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#delete LustreInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/lustre_instance#update LustreInstance#update}.

---

### LustreInstanceUpcomingMaintenanceSchedule <a name="LustreInstanceUpcomingMaintenanceSchedule" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceSchedule.Initializer"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

const lustreInstanceUpcomingMaintenanceSchedule: lustreInstance.LustreInstanceUpcomingMaintenanceSchedule = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### LustreInstanceAccessRulesOptionsAccessRulesList <a name="LustreInstanceAccessRulesOptionsAccessRulesList" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.Initializer"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

new lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.get"></a>

```typescript
public get(index: number): LustreInstanceAccessRulesOptionsAccessRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules">LustreInstanceAccessRulesOptionsAccessRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LustreInstanceAccessRulesOptionsAccessRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules">LustreInstanceAccessRulesOptionsAccessRules</a>[]

---


### LustreInstanceAccessRulesOptionsAccessRulesOutputReference <a name="LustreInstanceAccessRulesOptionsAccessRulesOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

new lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.ipAddressRangesInput">ipAddressRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.squashModeInput">squashModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.ipAddressRanges">ipAddressRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.squashMode">squashMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules">LustreInstanceAccessRulesOptionsAccessRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressRangesInput`<sup>Optional</sup> <a name="ipAddressRangesInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.ipAddressRangesInput"></a>

```typescript
public readonly ipAddressRangesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `squashModeInput`<sup>Optional</sup> <a name="squashModeInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.squashModeInput"></a>

```typescript
public readonly squashModeInput: string;
```

- *Type:* string

---

##### `ipAddressRanges`<sup>Required</sup> <a name="ipAddressRanges" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.ipAddressRanges"></a>

```typescript
public readonly ipAddressRanges: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `squashMode`<sup>Required</sup> <a name="squashMode" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.squashMode"></a>

```typescript
public readonly squashMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LustreInstanceAccessRulesOptionsAccessRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules">LustreInstanceAccessRulesOptionsAccessRules</a>

---


### LustreInstanceAccessRulesOptionsOutputReference <a name="LustreInstanceAccessRulesOptionsOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.Initializer"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

new lustreInstance.LustreInstanceAccessRulesOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.putAccessRules">putAccessRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.resetAccessRules">resetAccessRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.resetDefaultSquashGid">resetDefaultSquashGid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.resetDefaultSquashUid">resetDefaultSquashUid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessRules` <a name="putAccessRules" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.putAccessRules"></a>

```typescript
public putAccessRules(value: IResolvable | LustreInstanceAccessRulesOptionsAccessRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.putAccessRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules">LustreInstanceAccessRulesOptionsAccessRules</a>[]

---

##### `resetAccessRules` <a name="resetAccessRules" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.resetAccessRules"></a>

```typescript
public resetAccessRules(): void
```

##### `resetDefaultSquashGid` <a name="resetDefaultSquashGid" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.resetDefaultSquashGid"></a>

```typescript
public resetDefaultSquashGid(): void
```

##### `resetDefaultSquashUid` <a name="resetDefaultSquashUid" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.resetDefaultSquashUid"></a>

```typescript
public resetDefaultSquashUid(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.accessRules">accessRules</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList">LustreInstanceAccessRulesOptionsAccessRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.accessRulesInput">accessRulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules">LustreInstanceAccessRulesOptionsAccessRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashGidInput">defaultSquashGidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashModeInput">defaultSquashModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashUidInput">defaultSquashUidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashGid">defaultSquashGid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashMode">defaultSquashMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashUid">defaultSquashUid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions">LustreInstanceAccessRulesOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessRules`<sup>Required</sup> <a name="accessRules" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.accessRules"></a>

```typescript
public readonly accessRules: LustreInstanceAccessRulesOptionsAccessRulesList;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRulesList">LustreInstanceAccessRulesOptionsAccessRulesList</a>

---

##### `accessRulesInput`<sup>Optional</sup> <a name="accessRulesInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.accessRulesInput"></a>

```typescript
public readonly accessRulesInput: IResolvable | LustreInstanceAccessRulesOptionsAccessRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsAccessRules">LustreInstanceAccessRulesOptionsAccessRules</a>[]

---

##### `defaultSquashGidInput`<sup>Optional</sup> <a name="defaultSquashGidInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashGidInput"></a>

```typescript
public readonly defaultSquashGidInput: number;
```

- *Type:* number

---

##### `defaultSquashModeInput`<sup>Optional</sup> <a name="defaultSquashModeInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashModeInput"></a>

```typescript
public readonly defaultSquashModeInput: string;
```

- *Type:* string

---

##### `defaultSquashUidInput`<sup>Optional</sup> <a name="defaultSquashUidInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashUidInput"></a>

```typescript
public readonly defaultSquashUidInput: number;
```

- *Type:* number

---

##### `defaultSquashGid`<sup>Required</sup> <a name="defaultSquashGid" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashGid"></a>

```typescript
public readonly defaultSquashGid: number;
```

- *Type:* number

---

##### `defaultSquashMode`<sup>Required</sup> <a name="defaultSquashMode" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashMode"></a>

```typescript
public readonly defaultSquashMode: string;
```

- *Type:* string

---

##### `defaultSquashUid`<sup>Required</sup> <a name="defaultSquashUid" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashUid"></a>

```typescript
public readonly defaultSquashUid: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LustreInstanceAccessRulesOptions;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceAccessRulesOptions">LustreInstanceAccessRulesOptions</a>

---


### LustreInstanceDynamicTierOptionsOutputReference <a name="LustreInstanceDynamicTierOptionsOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.Initializer"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

new lustreInstance.LustreInstanceDynamicTierOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions">LustreInstanceDynamicTierOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LustreInstanceDynamicTierOptions;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceDynamicTierOptions">LustreInstanceDynamicTierOptions</a>

---


### LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference <a name="LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

new lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resetMonth">resetMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resetYear">resetYear</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resetDay"></a>

```typescript
public resetDay(): void
```

##### `resetMonth` <a name="resetMonth" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resetMonth"></a>

```typescript
public resetMonth(): void
```

##### `resetYear` <a name="resetYear" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resetYear"></a>

```typescript
public resetYear(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.dayInput">dayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.monthInput">monthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.yearInput">yearInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.day">day</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.month">month</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.year">year</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: number;
```

- *Type:* number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.monthInput"></a>

```typescript
public readonly monthInput: number;
```

- *Type:* number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.yearInput"></a>

```typescript
public readonly yearInput: number;
```

- *Type:* number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a>

---


### LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference <a name="LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

new lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putEndDate">putEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putStartDate">putStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putTime">putTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEndDate` <a name="putEndDate" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putEndDate"></a>

```typescript
public putEndDate(value: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a>

---

##### `putStartDate` <a name="putStartDate" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putStartDate"></a>

```typescript
public putStartDate(value: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a>

---

##### `putTime` <a name="putTime" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putTime"></a>

```typescript
public putTime(value: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.endDate">endDate</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.startDate">startDate</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.time">time</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.endDateInput">endDateInput</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.startDateInput">startDateInput</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.timeInput">timeInput</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow">LustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.endDate"></a>

```typescript
public readonly endDate: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference</a>

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.startDate"></a>

```typescript
public readonly startDate: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference</a>

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.time"></a>

```typescript
public readonly time: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference</a>

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.endDateInput"></a>

```typescript
public readonly endDateInput: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a>

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.startDateInput"></a>

```typescript
public readonly startDateInput: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a>

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LustreInstanceMaintenancePolicyMaintenanceExclusionWindow;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow">LustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a>

---


### LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference <a name="LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

new lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resetMonth">resetMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resetYear">resetYear</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resetDay"></a>

```typescript
public resetDay(): void
```

##### `resetMonth` <a name="resetMonth" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resetMonth"></a>

```typescript
public resetMonth(): void
```

##### `resetYear` <a name="resetYear" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resetYear"></a>

```typescript
public resetYear(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.dayInput">dayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.monthInput">monthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.yearInput">yearInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.day">day</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.month">month</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.year">year</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: number;
```

- *Type:* number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.monthInput"></a>

```typescript
public readonly monthInput: number;
```

- *Type:* number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.yearInput"></a>

```typescript
public readonly yearInput: number;
```

- *Type:* number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a>

---


### LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference <a name="LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

new lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetHours"></a>

```typescript
public resetHours(): void
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetMinutes"></a>

```typescript
public resetMinutes(): void
```

##### `resetNanos` <a name="resetNanos" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetSeconds"></a>

```typescript
public resetSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number;
```

- *Type:* number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a>

---


### LustreInstanceMaintenancePolicyOutputReference <a name="LustreInstanceMaintenancePolicyOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.Initializer"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

new lustreInstance.LustreInstanceMaintenancePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.putMaintenanceExclusionWindow">putMaintenanceExclusionWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindows">putWeeklyMaintenanceWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.resetMaintenanceExclusionWindow">resetMaintenanceExclusionWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaintenanceExclusionWindow` <a name="putMaintenanceExclusionWindow" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.putMaintenanceExclusionWindow"></a>

```typescript
public putMaintenanceExclusionWindow(value: LustreInstanceMaintenancePolicyMaintenanceExclusionWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.putMaintenanceExclusionWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow">LustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a>

---

##### `putWeeklyMaintenanceWindows` <a name="putWeeklyMaintenanceWindows" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindows"></a>

```typescript
public putWeeklyMaintenanceWindows(value: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindows.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a>

---

##### `resetMaintenanceExclusionWindow` <a name="resetMaintenanceExclusionWindow" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.resetMaintenanceExclusionWindow"></a>

```typescript
public resetMaintenanceExclusionWindow(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.maintenanceExclusionWindow">maintenanceExclusionWindow</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindows">weeklyMaintenanceWindows</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.maintenanceExclusionWindowInput">maintenanceExclusionWindowInput</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow">LustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowsInput">weeklyMaintenanceWindowsInput</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy">LustreInstanceMaintenancePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maintenanceExclusionWindow`<sup>Required</sup> <a name="maintenanceExclusionWindow" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.maintenanceExclusionWindow"></a>

```typescript
public readonly maintenanceExclusionWindow: LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference">LustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference</a>

---

##### `weeklyMaintenanceWindows`<sup>Required</sup> <a name="weeklyMaintenanceWindows" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindows"></a>

```typescript
public readonly weeklyMaintenanceWindows: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference</a>

---

##### `maintenanceExclusionWindowInput`<sup>Optional</sup> <a name="maintenanceExclusionWindowInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.maintenanceExclusionWindowInput"></a>

```typescript
public readonly maintenanceExclusionWindowInput: LustreInstanceMaintenancePolicyMaintenanceExclusionWindow;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyMaintenanceExclusionWindow">LustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a>

---

##### `weeklyMaintenanceWindowsInput`<sup>Optional</sup> <a name="weeklyMaintenanceWindowsInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowsInput"></a>

```typescript
public readonly weeklyMaintenanceWindowsInput: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LustreInstanceMaintenancePolicy;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicy">LustreInstanceMaintenancePolicy</a>

---


### LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference <a name="LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

new lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.putStartTime">putStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartTime` <a name="putStartTime" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.putStartTime"></a>

```typescript
public putStartTime(value: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.startTimeInput">startTimeInput</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.startTime"></a>

```typescript
public readonly startTime: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference</a>

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a>

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a>

---


### LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference <a name="LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

new lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetHours"></a>

```typescript
public resetHours(): void
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetMinutes"></a>

```typescript
public resetMinutes(): void
```

##### `resetNanos` <a name="resetNanos" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetSeconds"></a>

```typescript
public resetSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number;
```

- *Type:* number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">LustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a>

---


### LustreInstanceTimeoutsOutputReference <a name="LustreInstanceTimeoutsOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

new lustreInstance.LustreInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts">LustreInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lustreInstance.LustreInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LustreInstanceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceTimeouts">LustreInstanceTimeouts</a>

---


### LustreInstanceUpcomingMaintenanceScheduleList <a name="LustreInstanceUpcomingMaintenanceScheduleList" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.Initializer"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

new lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.get"></a>

```typescript
public get(index: number): LustreInstanceUpcomingMaintenanceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### LustreInstanceUpcomingMaintenanceScheduleOutputReference <a name="LustreInstanceUpcomingMaintenanceScheduleOutputReference" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer"></a>

```typescript
import { lustreInstance } from '@cdktn/provider-google'

new lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceSchedule">LustreInstanceUpcomingMaintenanceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LustreInstanceUpcomingMaintenanceSchedule;
```

- *Type:* <a href="#@cdktn/provider-google.lustreInstance.LustreInstanceUpcomingMaintenanceSchedule">LustreInstanceUpcomingMaintenanceSchedule</a>

---



