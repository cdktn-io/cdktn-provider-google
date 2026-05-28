# `oracleDatabaseDbSystem` Submodule <a name="`oracleDatabaseDbSystem` Submodule" id="@cdktn/provider-google.oracleDatabaseDbSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseDbSystem <a name="OracleDatabaseDbSystem" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system google_oracle_database_db_system}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

new oracleDatabaseDbSystem.OracleDatabaseDbSystem(scope: Construct, id: string, config: OracleDatabaseDbSystemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig">OracleDatabaseDbSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig">OracleDatabaseDbSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetGcpOracleZone">resetGcpOracleZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetOdbNetwork">resetOdbNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProperties` <a name="putProperties" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.putProperties"></a>

```typescript
public putProperties(value: OracleDatabaseDbSystemProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties">OracleDatabaseDbSystemProperties</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.putTimeouts"></a>

```typescript
public putTimeouts(value: OracleDatabaseDbSystemTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts">OracleDatabaseDbSystemTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetGcpOracleZone` <a name="resetGcpOracleZone" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetGcpOracleZone"></a>

```typescript
public resetGcpOracleZone(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetOdbNetwork` <a name="resetOdbNetwork" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetOdbNetwork"></a>

```typescript
public resetOdbNetwork(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OracleDatabaseDbSystem resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.isConstruct"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

oracleDatabaseDbSystem.OracleDatabaseDbSystem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.isTerraformElement"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

oracleDatabaseDbSystem.OracleDatabaseDbSystem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.isTerraformResource"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

oracleDatabaseDbSystem.OracleDatabaseDbSystem.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.generateConfigForImport"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

oracleDatabaseDbSystem.OracleDatabaseDbSystem.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OracleDatabaseDbSystem resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OracleDatabaseDbSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OracleDatabaseDbSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OracleDatabaseDbSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.entitlementId">entitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.ociUrl">ociUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference">OracleDatabaseDbSystemPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference">OracleDatabaseDbSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.dbSystemIdInput">dbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.gcpOracleZoneInput">gcpOracleZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.odbNetworkInput">odbNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.odbSubnetInput">odbSubnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties">OracleDatabaseDbSystemProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts">OracleDatabaseDbSystemTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.gcpOracleZone">gcpOracleZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.odbNetwork">odbNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.odbSubnet">odbSubnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.entitlementId"></a>

```typescript
public readonly entitlementId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.ociUrl"></a>

```typescript
public readonly ociUrl: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.properties"></a>

```typescript
public readonly properties: OracleDatabaseDbSystemPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference">OracleDatabaseDbSystemPropertiesOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.timeouts"></a>

```typescript
public readonly timeouts: OracleDatabaseDbSystemTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference">OracleDatabaseDbSystemTimeoutsOutputReference</a>

---

##### `dbSystemIdInput`<sup>Optional</sup> <a name="dbSystemIdInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.dbSystemIdInput"></a>

```typescript
public readonly dbSystemIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `gcpOracleZoneInput`<sup>Optional</sup> <a name="gcpOracleZoneInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.gcpOracleZoneInput"></a>

```typescript
public readonly gcpOracleZoneInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `odbNetworkInput`<sup>Optional</sup> <a name="odbNetworkInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.odbNetworkInput"></a>

```typescript
public readonly odbNetworkInput: string;
```

- *Type:* string

---

##### `odbSubnetInput`<sup>Optional</sup> <a name="odbSubnetInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.odbSubnetInput"></a>

```typescript
public readonly odbSubnetInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: OracleDatabaseDbSystemProperties;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties">OracleDatabaseDbSystemProperties</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OracleDatabaseDbSystemTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts">OracleDatabaseDbSystemTimeouts</a>

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `gcpOracleZone`<sup>Required</sup> <a name="gcpOracleZone" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.gcpOracleZone"></a>

```typescript
public readonly gcpOracleZone: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `odbNetwork`<sup>Required</sup> <a name="odbNetwork" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.odbNetwork"></a>

```typescript
public readonly odbNetwork: string;
```

- *Type:* string

---

##### `odbSubnet`<sup>Required</sup> <a name="odbSubnet" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.odbSubnet"></a>

```typescript
public readonly odbSubnet: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseDbSystemConfig <a name="OracleDatabaseDbSystemConfig" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.Initializer"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

const oracleDatabaseDbSystemConfig: oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | The ID of the DbSystem to create. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name for the System db. The name does not have to be unique within your project. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.odbSubnet">odbSubnet</a></code> | <code>string</code> | The name of the OdbSubnet associated with the DbSystem for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.gcpOracleZone">gcpOracleZone</a></code> | <code>string</code> | The GCP Oracle zone where Oracle DbSystem is hosted. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#id OracleDatabaseDbSystem#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels or tags associated with the DbSystem. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.odbNetwork">odbNetwork</a></code> | <code>string</code> | The name of the OdbNetwork associated with the DbSystem. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#project OracleDatabaseDbSystem#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties">OracleDatabaseDbSystemProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts">OracleDatabaseDbSystemTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

The ID of the DbSystem to create.

This value is
restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#db_system_id OracleDatabaseDbSystem#db_system_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name for the System db. The name does not have to be unique within your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#display_name OracleDatabaseDbSystem#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#location OracleDatabaseDbSystem#location}

---

##### `odbSubnet`<sup>Required</sup> <a name="odbSubnet" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.odbSubnet"></a>

```typescript
public readonly odbSubnet: string;
```

- *Type:* string

The name of the OdbSubnet associated with the DbSystem for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#odb_subnet OracleDatabaseDbSystem#odb_subnet}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#deletion_policy OracleDatabaseDbSystem#deletion_policy}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#deletion_protection OracleDatabaseDbSystem#deletion_protection}

---

##### `gcpOracleZone`<sup>Optional</sup> <a name="gcpOracleZone" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.gcpOracleZone"></a>

```typescript
public readonly gcpOracleZone: string;
```

- *Type:* string

The GCP Oracle zone where Oracle DbSystem is hosted.

Example: us-east4-b-r2.
If not specified, the system will pick a zone based on availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#gcp_oracle_zone OracleDatabaseDbSystem#gcp_oracle_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#id OracleDatabaseDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels or tags associated with the DbSystem.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#labels OracleDatabaseDbSystem#labels}

---

##### `odbNetwork`<sup>Optional</sup> <a name="odbNetwork" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.odbNetwork"></a>

```typescript
public readonly odbNetwork: string;
```

- *Type:* string

The name of the OdbNetwork associated with the DbSystem.

Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}
It is optional but if specified, this should match the parent ODBNetwork of
the OdbSubnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#odb_network OracleDatabaseDbSystem#odb_network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#project OracleDatabaseDbSystem#project}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.properties"></a>

```typescript
public readonly properties: OracleDatabaseDbSystemProperties;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties">OracleDatabaseDbSystemProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#properties OracleDatabaseDbSystem#properties}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OracleDatabaseDbSystemTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts">OracleDatabaseDbSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#timeouts OracleDatabaseDbSystem#timeouts}

---

### OracleDatabaseDbSystemProperties <a name="OracleDatabaseDbSystemProperties" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.Initializer"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

const oracleDatabaseDbSystemProperties: oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.computeCount">computeCount</a></code> | <code>number</code> | The number of CPU cores to enable for the DbSystem. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.databaseEdition">databaseEdition</a></code> | <code>string</code> | The database edition of the DbSystem. Possible values: STANDARD_EDITION ENTERPRISE_EDITION ENTERPRISE_EDITION_HIGH_PERFORMANCE. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.initialDataStorageSizeGb">initialDataStorageSizeGb</a></code> | <code>number</code> | The initial data storage size in GB. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.licenseModel">licenseModel</a></code> | <code>string</code> | The license model of the DbSystem. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.shape">shape</a></code> | <code>string</code> | Shape of DB System. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.sshPublicKeys">sshPublicKeys</a></code> | <code>string[]</code> | SSH public keys to be stored with the DbSystem. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.computeModel">computeModel</a></code> | <code>string</code> | The compute model of the DbSystem. Possible values: ECPU OCPU. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptions">OracleDatabaseDbSystemPropertiesDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.dataStorageSizeGb">dataStorageSizeGb</a></code> | <code>number</code> | The data storage size in GB that is currently available to DbSystems. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.dbHome">dbHome</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome">OracleDatabaseDbSystemPropertiesDbHome</a></code> | db_home block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.dbSystemOptions">dbSystemOptions</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptions">OracleDatabaseDbSystemPropertiesDbSystemOptions</a></code> | db_system_options block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.domain">domain</a></code> | <code>string</code> | The host domain name of the DbSystem. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.hostnamePrefix">hostnamePrefix</a></code> | <code>string</code> | Prefix for DB System host names. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.memorySizeGb">memorySizeGb</a></code> | <code>number</code> | The memory size in GB. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.nodeCount">nodeCount</a></code> | <code>number</code> | The number of nodes in the DbSystem. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.privateIp">privateIp</a></code> | <code>string</code> | The private IP address of the DbSystem. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.recoStorageSizeGb">recoStorageSizeGb</a></code> | <code>number</code> | The reco/redo storage size in GB. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.timeZone">timeZone</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZone">OracleDatabaseDbSystemPropertiesTimeZone</a></code> | time_zone block. |

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

The number of CPU cores to enable for the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#compute_count OracleDatabaseDbSystem#compute_count}

---

##### `databaseEdition`<sup>Required</sup> <a name="databaseEdition" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.databaseEdition"></a>

```typescript
public readonly databaseEdition: string;
```

- *Type:* string

The database edition of the DbSystem. Possible values: STANDARD_EDITION ENTERPRISE_EDITION ENTERPRISE_EDITION_HIGH_PERFORMANCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#database_edition OracleDatabaseDbSystem#database_edition}

---

##### `initialDataStorageSizeGb`<sup>Required</sup> <a name="initialDataStorageSizeGb" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.initialDataStorageSizeGb"></a>

```typescript
public readonly initialDataStorageSizeGb: number;
```

- *Type:* number

The initial data storage size in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#initial_data_storage_size_gb OracleDatabaseDbSystem#initial_data_storage_size_gb}

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

The license model of the DbSystem. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#license_model OracleDatabaseDbSystem#license_model}

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

Shape of DB System.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#shape OracleDatabaseDbSystem#shape}

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.sshPublicKeys"></a>

```typescript
public readonly sshPublicKeys: string[];
```

- *Type:* string[]

SSH public keys to be stored with the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#ssh_public_keys OracleDatabaseDbSystem#ssh_public_keys}

---

##### `computeModel`<sup>Optional</sup> <a name="computeModel" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.computeModel"></a>

```typescript
public readonly computeModel: string;
```

- *Type:* string

The compute model of the DbSystem. Possible values: ECPU OCPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#compute_model OracleDatabaseDbSystem#compute_model}

---

##### `dataCollectionOptions`<sup>Optional</sup> <a name="dataCollectionOptions" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.dataCollectionOptions"></a>

```typescript
public readonly dataCollectionOptions: OracleDatabaseDbSystemPropertiesDataCollectionOptions;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptions">OracleDatabaseDbSystemPropertiesDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#data_collection_options OracleDatabaseDbSystem#data_collection_options}

---

##### `dataStorageSizeGb`<sup>Optional</sup> <a name="dataStorageSizeGb" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.dataStorageSizeGb"></a>

```typescript
public readonly dataStorageSizeGb: number;
```

- *Type:* number

The data storage size in GB that is currently available to DbSystems.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#data_storage_size_gb OracleDatabaseDbSystem#data_storage_size_gb}

---

##### `dbHome`<sup>Optional</sup> <a name="dbHome" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.dbHome"></a>

```typescript
public readonly dbHome: OracleDatabaseDbSystemPropertiesDbHome;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome">OracleDatabaseDbSystemPropertiesDbHome</a>

db_home block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#db_home OracleDatabaseDbSystem#db_home}

---

##### `dbSystemOptions`<sup>Optional</sup> <a name="dbSystemOptions" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.dbSystemOptions"></a>

```typescript
public readonly dbSystemOptions: OracleDatabaseDbSystemPropertiesDbSystemOptions;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptions">OracleDatabaseDbSystemPropertiesDbSystemOptions</a>

db_system_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#db_system_options OracleDatabaseDbSystem#db_system_options}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

The host domain name of the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#domain OracleDatabaseDbSystem#domain}

---

##### `hostnamePrefix`<sup>Optional</sup> <a name="hostnamePrefix" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.hostnamePrefix"></a>

```typescript
public readonly hostnamePrefix: string;
```

- *Type:* string

Prefix for DB System host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#hostname_prefix OracleDatabaseDbSystem#hostname_prefix}

---

##### `memorySizeGb`<sup>Optional</sup> <a name="memorySizeGb" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.memorySizeGb"></a>

```typescript
public readonly memorySizeGb: number;
```

- *Type:* number

The memory size in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#memory_size_gb OracleDatabaseDbSystem#memory_size_gb}

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

The number of nodes in the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#node_count OracleDatabaseDbSystem#node_count}

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

The private IP address of the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#private_ip OracleDatabaseDbSystem#private_ip}

---

##### `recoStorageSizeGb`<sup>Optional</sup> <a name="recoStorageSizeGb" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.recoStorageSizeGb"></a>

```typescript
public readonly recoStorageSizeGb: number;
```

- *Type:* number

The reco/redo storage size in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#reco_storage_size_gb OracleDatabaseDbSystem#reco_storage_size_gb}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.timeZone"></a>

```typescript
public readonly timeZone: OracleDatabaseDbSystemPropertiesTimeZone;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZone">OracleDatabaseDbSystemPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#time_zone OracleDatabaseDbSystem#time_zone}

---

### OracleDatabaseDbSystemPropertiesDataCollectionOptions <a name="OracleDatabaseDbSystemPropertiesDataCollectionOptions" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptions.Initializer"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

const oracleDatabaseDbSystemPropertiesDataCollectionOptions: oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptions.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether to enable data collection for diagnostics. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptions.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether to enable incident logs and trace collection. |

---

##### `isDiagnosticsEventsEnabled`<sup>Optional</sup> <a name="isDiagnosticsEventsEnabled" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```typescript
public readonly isDiagnosticsEventsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether to enable data collection for diagnostics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#is_diagnostics_events_enabled OracleDatabaseDbSystem#is_diagnostics_events_enabled}

---

##### `isIncidentLogsEnabled`<sup>Optional</sup> <a name="isIncidentLogsEnabled" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```typescript
public readonly isIncidentLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether to enable incident logs and trace collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#is_incident_logs_enabled OracleDatabaseDbSystem#is_incident_logs_enabled}

---

### OracleDatabaseDbSystemPropertiesDbHome <a name="OracleDatabaseDbSystemPropertiesDbHome" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome.Initializer"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

const oracleDatabaseDbSystemPropertiesDbHome: oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome.property.database">database</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase">OracleDatabaseDbSystemPropertiesDbHomeDatabase</a></code> | database block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome.property.dbVersion">dbVersion</a></code> | <code>string</code> | A valid Oracle Database version. For a list of supported versions, use the ListDbVersions operation. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome.property.displayName">displayName</a></code> | <code>string</code> | The display name for the Database Home. The name does not have to be unique within your project. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome.property.isUnifiedAuditingEnabled">isUnifiedAuditingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether unified auditing is enabled for the Database Home. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome.property.database"></a>

```typescript
public readonly database: OracleDatabaseDbSystemPropertiesDbHomeDatabase;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase">OracleDatabaseDbSystemPropertiesDbHomeDatabase</a>

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#database OracleDatabaseDbSystem#database}

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome.property.dbVersion"></a>

```typescript
public readonly dbVersion: string;
```

- *Type:* string

A valid Oracle Database version. For a list of supported versions, use the ListDbVersions operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#db_version OracleDatabaseDbSystem#db_version}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name for the Database Home. The name does not have to be unique within your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#display_name OracleDatabaseDbSystem#display_name}

---

##### `isUnifiedAuditingEnabled`<sup>Optional</sup> <a name="isUnifiedAuditingEnabled" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome.property.isUnifiedAuditingEnabled"></a>

```typescript
public readonly isUnifiedAuditingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether unified auditing is enabled for the Database Home.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#is_unified_auditing_enabled OracleDatabaseDbSystem#is_unified_auditing_enabled}

---

### OracleDatabaseDbSystemPropertiesDbHomeDatabase <a name="OracleDatabaseDbSystemPropertiesDbHomeDatabase" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.Initializer"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

const oracleDatabaseDbSystemPropertiesDbHomeDatabase: oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.adminPassword">adminPassword</a></code> | <code>string</code> | The password for the default ADMIN user. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.databaseId">databaseId</a></code> | <code>string</code> | The database ID of the Database. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.characterSet">characterSet</a></code> | <code>string</code> | The character set for the database. The default is AL32UTF8. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbHomeName">dbHomeName</a></code> | <code>string</code> | The name of the DbHome resource associated with the Database. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbName">dbName</a></code> | <code>string</code> | The database name. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbUniqueName">dbUniqueName</a></code> | <code>string</code> | The DB_UNIQUE_NAME of the Oracle Database being backed up. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.gcpOracleZone">gcpOracleZone</a></code> | <code>string</code> | The GCP Oracle zone where the Database is created. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.ncharacterSet">ncharacterSet</a></code> | <code>string</code> | The national character set for the database. The default is AL16UTF16. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.pluggableDatabaseId">pluggableDatabaseId</a></code> | <code>string</code> | The ID of the pluggable database associated with Database. The ID must be unique within the project and location. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.pluggableDatabaseName">pluggableDatabaseName</a></code> | <code>string</code> | The pluggable dataabse associated with the Database. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.tdeWalletPassword">tdeWalletPassword</a></code> | <code>string</code> | The TDE wallet password for the database. |

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

The password for the default ADMIN user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#admin_password OracleDatabaseDbSystem#admin_password}

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

The database ID of the Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#database_id OracleDatabaseDbSystem#database_id}

---

##### `characterSet`<sup>Optional</sup> <a name="characterSet" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.characterSet"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* string

The character set for the database. The default is AL32UTF8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#character_set OracleDatabaseDbSystem#character_set}

---

##### `dbHomeName`<sup>Optional</sup> <a name="dbHomeName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbHomeName"></a>

```typescript
public readonly dbHomeName: string;
```

- *Type:* string

The name of the DbHome resource associated with the Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#db_home_name OracleDatabaseDbSystem#db_home_name}

---

##### `dbName`<sup>Optional</sup> <a name="dbName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

The database name.

The name must begin with an alphabetic character and can
contain a maximum of eight alphanumeric characters. Special characters are
not permitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#db_name OracleDatabaseDbSystem#db_name}

---

##### `dbUniqueName`<sup>Optional</sup> <a name="dbUniqueName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbUniqueName"></a>

```typescript
public readonly dbUniqueName: string;
```

- *Type:* string

The DB_UNIQUE_NAME of the Oracle Database being backed up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#db_unique_name OracleDatabaseDbSystem#db_unique_name}

---

##### `gcpOracleZone`<sup>Optional</sup> <a name="gcpOracleZone" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.gcpOracleZone"></a>

```typescript
public readonly gcpOracleZone: string;
```

- *Type:* string

The GCP Oracle zone where the Database is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#gcp_oracle_zone OracleDatabaseDbSystem#gcp_oracle_zone}

---

##### `ncharacterSet`<sup>Optional</sup> <a name="ncharacterSet" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.ncharacterSet"></a>

```typescript
public readonly ncharacterSet: string;
```

- *Type:* string

The national character set for the database. The default is AL16UTF16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#ncharacter_set OracleDatabaseDbSystem#ncharacter_set}

---

##### `pluggableDatabaseId`<sup>Optional</sup> <a name="pluggableDatabaseId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.pluggableDatabaseId"></a>

```typescript
public readonly pluggableDatabaseId: string;
```

- *Type:* string

The ID of the pluggable database associated with Database. The ID must be unique within the project and location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#pluggable_database_id OracleDatabaseDbSystem#pluggable_database_id}

---

##### `pluggableDatabaseName`<sup>Optional</sup> <a name="pluggableDatabaseName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.pluggableDatabaseName"></a>

```typescript
public readonly pluggableDatabaseName: string;
```

- *Type:* string

The pluggable dataabse associated with the Database.

The name must begin with an alphabetic character and can contain a maximum of thirty alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#pluggable_database_name OracleDatabaseDbSystem#pluggable_database_name}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.properties"></a>

```typescript
public readonly properties: OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#properties OracleDatabaseDbSystem#properties}

---

##### `tdeWalletPassword`<sup>Optional</sup> <a name="tdeWalletPassword" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.tdeWalletPassword"></a>

```typescript
public readonly tdeWalletPassword: string;
```

- *Type:* string

The TDE wallet password for the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#tde_wallet_password OracleDatabaseDbSystem#tde_wallet_password}

---

### OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties <a name="OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.Initializer"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

const oracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties: oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.dbVersion">dbVersion</a></code> | <code>string</code> | The Oracle Database version. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.databaseManagementConfig">databaseManagementConfig</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a></code> | database_management_config block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.dbBackupConfig">dbBackupConfig</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a></code> | db_backup_config block. |

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.dbVersion"></a>

```typescript
public readonly dbVersion: string;
```

- *Type:* string

The Oracle Database version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#db_version OracleDatabaseDbSystem#db_version}

---

##### `databaseManagementConfig`<sup>Optional</sup> <a name="databaseManagementConfig" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.databaseManagementConfig"></a>

```typescript
public readonly databaseManagementConfig: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a>

database_management_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#database_management_config OracleDatabaseDbSystem#database_management_config}

---

##### `dbBackupConfig`<sup>Optional</sup> <a name="dbBackupConfig" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.dbBackupConfig"></a>

```typescript
public readonly dbBackupConfig: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a>

db_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#db_backup_config OracleDatabaseDbSystem#db_backup_config}

---

### OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig <a name="OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig.Initializer"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

const oracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig: oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig = { ... }
```


### OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig <a name="OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.Initializer"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

const oracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig: oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoBackupEnabled">autoBackupEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, enables automatic backups on the database. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoFullBackupDay">autoFullBackupDay</a></code> | <code>string</code> | Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoFullBackupWindow">autoFullBackupWindow</a></code> | <code>string</code> | The window in which the full backup should be performed on the database. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoIncrementalBackupWindow">autoIncrementalBackupWindow</a></code> | <code>string</code> | The window in which the incremental backup should be performed on the database. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.backupDeletionPolicy">backupDeletionPolicy</a></code> | <code>string</code> | This defines when the backups will be deleted after Database termination. Possible values: DELETE_IMMEDIATELY DELETE_AFTER_RETENTION_PERIOD. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.backupDestinationDetails">backupDestinationDetails</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>[]</code> | backup_destination_details block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.retentionPeriodDays">retentionPeriodDays</a></code> | <code>number</code> | The number of days an automatic backup is retained before being automatically deleted. |

---

##### `autoBackupEnabled`<sup>Optional</sup> <a name="autoBackupEnabled" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoBackupEnabled"></a>

```typescript
public readonly autoBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, enables automatic backups on the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#auto_backup_enabled OracleDatabaseDbSystem#auto_backup_enabled}

---

##### `autoFullBackupDay`<sup>Optional</sup> <a name="autoFullBackupDay" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoFullBackupDay"></a>

```typescript
public readonly autoFullBackupDay: string;
```

- *Type:* string

Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#auto_full_backup_day OracleDatabaseDbSystem#auto_full_backup_day}

---

##### `autoFullBackupWindow`<sup>Optional</sup> <a name="autoFullBackupWindow" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoFullBackupWindow"></a>

```typescript
public readonly autoFullBackupWindow: string;
```

- *Type:* string

The window in which the full backup should be performed on the database.

If no value is provided, the default is anytime.
Possible values:
SLOT_ONE
SLOT_TWO
SLOT_THREE
SLOT_FOUR
SLOT_FIVE
SLOT_SIX
SLOT_SEVEN
SLOT_EIGHT
SLOT_NINE
SLOT_TEN
SLOT_ELEVEN
SLOT_TWELVE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#auto_full_backup_window OracleDatabaseDbSystem#auto_full_backup_window}

---

##### `autoIncrementalBackupWindow`<sup>Optional</sup> <a name="autoIncrementalBackupWindow" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoIncrementalBackupWindow"></a>

```typescript
public readonly autoIncrementalBackupWindow: string;
```

- *Type:* string

The window in which the incremental backup should be performed on the database.

If no value is provided, the default is anytime except the auto
full backup day.
Possible values:
SLOT_ONE
SLOT_TWO
SLOT_THREE
SLOT_FOUR
SLOT_FIVE
SLOT_SIX
SLOT_SEVEN
SLOT_EIGHT
SLOT_NINE
SLOT_TEN
SLOT_ELEVEN
SLOT_TWELVE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#auto_incremental_backup_window OracleDatabaseDbSystem#auto_incremental_backup_window}

---

##### `backupDeletionPolicy`<sup>Optional</sup> <a name="backupDeletionPolicy" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.backupDeletionPolicy"></a>

```typescript
public readonly backupDeletionPolicy: string;
```

- *Type:* string

This defines when the backups will be deleted after Database termination. Possible values: DELETE_IMMEDIATELY DELETE_AFTER_RETENTION_PERIOD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#backup_deletion_policy OracleDatabaseDbSystem#backup_deletion_policy}

---

##### `backupDestinationDetails`<sup>Optional</sup> <a name="backupDestinationDetails" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.backupDestinationDetails"></a>

```typescript
public readonly backupDestinationDetails: IResolvable | OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>[]

backup_destination_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#backup_destination_details OracleDatabaseDbSystem#backup_destination_details}

---

##### `retentionPeriodDays`<sup>Optional</sup> <a name="retentionPeriodDays" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.retentionPeriodDays"></a>

```typescript
public readonly retentionPeriodDays: number;
```

- *Type:* number

The number of days an automatic backup is retained before being automatically deleted.

This value determines the earliest point in time to
which a database can be restored. Min: 1, Max: 60.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#retention_period_days OracleDatabaseDbSystem#retention_period_days}

---

### OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails <a name="OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails.Initializer"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

const oracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails: oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails.property.type">type</a></code> | <code>string</code> | The type of the database backup destination. Possible values: NFS RECOVERY_APPLIANCE OBJECT_STORE LOCAL DBRS. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the database backup destination. Possible values: NFS RECOVERY_APPLIANCE OBJECT_STORE LOCAL DBRS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#type OracleDatabaseDbSystem#type}

---

### OracleDatabaseDbSystemPropertiesDbSystemOptions <a name="OracleDatabaseDbSystemPropertiesDbSystemOptions" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptions.Initializer"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

const oracleDatabaseDbSystemPropertiesDbSystemOptions: oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptions.property.storageManagement">storageManagement</a></code> | <code>string</code> | The storage option used in DB system. Possible values: ASM LVM. |

---

##### `storageManagement`<sup>Optional</sup> <a name="storageManagement" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptions.property.storageManagement"></a>

```typescript
public readonly storageManagement: string;
```

- *Type:* string

The storage option used in DB system. Possible values: ASM LVM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#storage_management OracleDatabaseDbSystem#storage_management}

---

### OracleDatabaseDbSystemPropertiesTimeZone <a name="OracleDatabaseDbSystemPropertiesTimeZone" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZone.Initializer"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

const oracleDatabaseDbSystemPropertiesTimeZone: oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZone = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZone.property.id">id</a></code> | <code>string</code> | IANA Time Zone Database time zone. For example "America/New_York". |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZone.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

IANA Time Zone Database time zone. For example "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#id OracleDatabaseDbSystem#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OracleDatabaseDbSystemTimeouts <a name="OracleDatabaseDbSystemTimeouts" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts.Initializer"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

const oracleDatabaseDbSystemTimeouts: oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#create OracleDatabaseDbSystem#create}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#delete OracleDatabaseDbSystem#delete}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#update OracleDatabaseDbSystem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#create OracleDatabaseDbSystem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#delete OracleDatabaseDbSystem#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/oracle_database_db_system#update OracleDatabaseDbSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference <a name="OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

new oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">resetIsDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">resetIsIncidentLogsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsDiagnosticsEventsEnabled` <a name="resetIsDiagnosticsEventsEnabled" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```typescript
public resetIsDiagnosticsEventsEnabled(): void
```

##### `resetIsIncidentLogsEnabled` <a name="resetIsIncidentLogsEnabled" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```typescript
public resetIsIncidentLogsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">isDiagnosticsEventsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">isIncidentLogsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptions">OracleDatabaseDbSystemPropertiesDataCollectionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isDiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="isDiagnosticsEventsEnabledInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```typescript
public readonly isDiagnosticsEventsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isIncidentLogsEnabledInput`<sup>Optional</sup> <a name="isIncidentLogsEnabledInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```typescript
public readonly isIncidentLogsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isDiagnosticsEventsEnabled`<sup>Required</sup> <a name="isDiagnosticsEventsEnabled" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```typescript
public readonly isDiagnosticsEventsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isIncidentLogsEnabled`<sup>Required</sup> <a name="isIncidentLogsEnabled" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```typescript
public readonly isIncidentLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleDatabaseDbSystemPropertiesDataCollectionOptions;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptions">OracleDatabaseDbSystemPropertiesDataCollectionOptions</a>

---


### OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference <a name="OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

new oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetCharacterSet">resetCharacterSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbHomeName">resetDbHomeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbName">resetDbName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbUniqueName">resetDbUniqueName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetGcpOracleZone">resetGcpOracleZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetNcharacterSet">resetNcharacterSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetPluggableDatabaseId">resetPluggableDatabaseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetPluggableDatabaseName">resetPluggableDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetTdeWalletPassword">resetTdeWalletPassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProperties` <a name="putProperties" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.putProperties"></a>

```typescript
public putProperties(value: OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a>

---

##### `resetCharacterSet` <a name="resetCharacterSet" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetCharacterSet"></a>

```typescript
public resetCharacterSet(): void
```

##### `resetDbHomeName` <a name="resetDbHomeName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbHomeName"></a>

```typescript
public resetDbHomeName(): void
```

##### `resetDbName` <a name="resetDbName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbName"></a>

```typescript
public resetDbName(): void
```

##### `resetDbUniqueName` <a name="resetDbUniqueName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbUniqueName"></a>

```typescript
public resetDbUniqueName(): void
```

##### `resetGcpOracleZone` <a name="resetGcpOracleZone" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetGcpOracleZone"></a>

```typescript
public resetGcpOracleZone(): void
```

##### `resetNcharacterSet` <a name="resetNcharacterSet" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetNcharacterSet"></a>

```typescript
public resetNcharacterSet(): void
```

##### `resetPluggableDatabaseId` <a name="resetPluggableDatabaseId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetPluggableDatabaseId"></a>

```typescript
public resetPluggableDatabaseId(): void
```

##### `resetPluggableDatabaseName` <a name="resetPluggableDatabaseName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetPluggableDatabaseName"></a>

```typescript
public resetPluggableDatabaseName(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetTdeWalletPassword` <a name="resetTdeWalletPassword" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetTdeWalletPassword"></a>

```typescript
public resetTdeWalletPassword(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ociUrl">ociUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.opsInsightsStatus">opsInsightsStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.adminPasswordInput">adminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.characterSetInput">characterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.databaseIdInput">databaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbHomeNameInput">dbHomeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbNameInput">dbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbUniqueNameInput">dbUniqueNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.gcpOracleZoneInput">gcpOracleZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ncharacterSetInput">ncharacterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseIdInput">pluggableDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseNameInput">pluggableDatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.tdeWalletPasswordInput">tdeWalletPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.adminPassword">adminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.characterSet">characterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.databaseId">databaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbHomeName">dbHomeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbName">dbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbUniqueName">dbUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.gcpOracleZone">gcpOracleZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ncharacterSet">ncharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseId">pluggableDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseName">pluggableDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.tdeWalletPassword">tdeWalletPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase">OracleDatabaseDbSystemPropertiesDbHomeDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ociUrl"></a>

```typescript
public readonly ociUrl: string;
```

- *Type:* string

---

##### `opsInsightsStatus`<sup>Required</sup> <a name="opsInsightsStatus" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.opsInsightsStatus"></a>

```typescript
public readonly opsInsightsStatus: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.properties"></a>

```typescript
public readonly properties: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference</a>

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.adminPasswordInput"></a>

```typescript
public readonly adminPasswordInput: string;
```

- *Type:* string

---

##### `characterSetInput`<sup>Optional</sup> <a name="characterSetInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.characterSetInput"></a>

```typescript
public readonly characterSetInput: string;
```

- *Type:* string

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.databaseIdInput"></a>

```typescript
public readonly databaseIdInput: string;
```

- *Type:* string

---

##### `dbHomeNameInput`<sup>Optional</sup> <a name="dbHomeNameInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbHomeNameInput"></a>

```typescript
public readonly dbHomeNameInput: string;
```

- *Type:* string

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbNameInput"></a>

```typescript
public readonly dbNameInput: string;
```

- *Type:* string

---

##### `dbUniqueNameInput`<sup>Optional</sup> <a name="dbUniqueNameInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbUniqueNameInput"></a>

```typescript
public readonly dbUniqueNameInput: string;
```

- *Type:* string

---

##### `gcpOracleZoneInput`<sup>Optional</sup> <a name="gcpOracleZoneInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.gcpOracleZoneInput"></a>

```typescript
public readonly gcpOracleZoneInput: string;
```

- *Type:* string

---

##### `ncharacterSetInput`<sup>Optional</sup> <a name="ncharacterSetInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ncharacterSetInput"></a>

```typescript
public readonly ncharacterSetInput: string;
```

- *Type:* string

---

##### `pluggableDatabaseIdInput`<sup>Optional</sup> <a name="pluggableDatabaseIdInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseIdInput"></a>

```typescript
public readonly pluggableDatabaseIdInput: string;
```

- *Type:* string

---

##### `pluggableDatabaseNameInput`<sup>Optional</sup> <a name="pluggableDatabaseNameInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseNameInput"></a>

```typescript
public readonly pluggableDatabaseNameInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a>

---

##### `tdeWalletPasswordInput`<sup>Optional</sup> <a name="tdeWalletPasswordInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.tdeWalletPasswordInput"></a>

```typescript
public readonly tdeWalletPasswordInput: string;
```

- *Type:* string

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.characterSet"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* string

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

---

##### `dbHomeName`<sup>Required</sup> <a name="dbHomeName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbHomeName"></a>

```typescript
public readonly dbHomeName: string;
```

- *Type:* string

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

---

##### `dbUniqueName`<sup>Required</sup> <a name="dbUniqueName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbUniqueName"></a>

```typescript
public readonly dbUniqueName: string;
```

- *Type:* string

---

##### `gcpOracleZone`<sup>Required</sup> <a name="gcpOracleZone" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.gcpOracleZone"></a>

```typescript
public readonly gcpOracleZone: string;
```

- *Type:* string

---

##### `ncharacterSet`<sup>Required</sup> <a name="ncharacterSet" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ncharacterSet"></a>

```typescript
public readonly ncharacterSet: string;
```

- *Type:* string

---

##### `pluggableDatabaseId`<sup>Required</sup> <a name="pluggableDatabaseId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseId"></a>

```typescript
public readonly pluggableDatabaseId: string;
```

- *Type:* string

---

##### `pluggableDatabaseName`<sup>Required</sup> <a name="pluggableDatabaseName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseName"></a>

```typescript
public readonly pluggableDatabaseName: string;
```

- *Type:* string

---

##### `tdeWalletPassword`<sup>Required</sup> <a name="tdeWalletPassword" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.tdeWalletPassword"></a>

```typescript
public readonly tdeWalletPassword: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleDatabaseDbSystemPropertiesDbHomeDatabase;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase">OracleDatabaseDbSystemPropertiesDbHomeDatabase</a>

---


### OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference <a name="OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

new oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.managementState">managementState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.managementType">managementType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `managementState`<sup>Required</sup> <a name="managementState" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.managementState"></a>

```typescript
public readonly managementState: string;
```

- *Type:* string

---

##### `managementType`<sup>Required</sup> <a name="managementType" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.managementType"></a>

```typescript
public readonly managementType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a>

---


### OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList <a name="OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

new oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.get"></a>

```typescript
public get(index: number): OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>[]

---


### OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference <a name="OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

new oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>

---


### OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference <a name="OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

new oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.putBackupDestinationDetails">putBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoBackupEnabled">resetAutoBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoFullBackupDay">resetAutoFullBackupDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoFullBackupWindow">resetAutoFullBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoIncrementalBackupWindow">resetAutoIncrementalBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetBackupDeletionPolicy">resetBackupDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetBackupDestinationDetails">resetBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetRetentionPeriodDays">resetRetentionPeriodDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackupDestinationDetails` <a name="putBackupDestinationDetails" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.putBackupDestinationDetails"></a>

```typescript
public putBackupDestinationDetails(value: IResolvable | OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.putBackupDestinationDetails.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>[]

---

##### `resetAutoBackupEnabled` <a name="resetAutoBackupEnabled" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoBackupEnabled"></a>

```typescript
public resetAutoBackupEnabled(): void
```

##### `resetAutoFullBackupDay` <a name="resetAutoFullBackupDay" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoFullBackupDay"></a>

```typescript
public resetAutoFullBackupDay(): void
```

##### `resetAutoFullBackupWindow` <a name="resetAutoFullBackupWindow" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoFullBackupWindow"></a>

```typescript
public resetAutoFullBackupWindow(): void
```

##### `resetAutoIncrementalBackupWindow` <a name="resetAutoIncrementalBackupWindow" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoIncrementalBackupWindow"></a>

```typescript
public resetAutoIncrementalBackupWindow(): void
```

##### `resetBackupDeletionPolicy` <a name="resetBackupDeletionPolicy" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetBackupDeletionPolicy"></a>

```typescript
public resetBackupDeletionPolicy(): void
```

##### `resetBackupDestinationDetails` <a name="resetBackupDestinationDetails" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetBackupDestinationDetails"></a>

```typescript
public resetBackupDestinationDetails(): void
```

##### `resetRetentionPeriodDays` <a name="resetRetentionPeriodDays" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetRetentionPeriodDays"></a>

```typescript
public resetRetentionPeriodDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDestinationDetails">backupDestinationDetails</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoBackupEnabledInput">autoBackupEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupDayInput">autoFullBackupDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupWindowInput">autoFullBackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoIncrementalBackupWindowInput">autoIncrementalBackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDeletionPolicyInput">backupDeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDestinationDetailsInput">backupDestinationDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.retentionPeriodDaysInput">retentionPeriodDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoBackupEnabled">autoBackupEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupDay">autoFullBackupDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupWindow">autoFullBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoIncrementalBackupWindow">autoIncrementalBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDeletionPolicy">backupDeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.retentionPeriodDays">retentionPeriodDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupDestinationDetails`<sup>Required</sup> <a name="backupDestinationDetails" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDestinationDetails"></a>

```typescript
public readonly backupDestinationDetails: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList</a>

---

##### `autoBackupEnabledInput`<sup>Optional</sup> <a name="autoBackupEnabledInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoBackupEnabledInput"></a>

```typescript
public readonly autoBackupEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `autoFullBackupDayInput`<sup>Optional</sup> <a name="autoFullBackupDayInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupDayInput"></a>

```typescript
public readonly autoFullBackupDayInput: string;
```

- *Type:* string

---

##### `autoFullBackupWindowInput`<sup>Optional</sup> <a name="autoFullBackupWindowInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupWindowInput"></a>

```typescript
public readonly autoFullBackupWindowInput: string;
```

- *Type:* string

---

##### `autoIncrementalBackupWindowInput`<sup>Optional</sup> <a name="autoIncrementalBackupWindowInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoIncrementalBackupWindowInput"></a>

```typescript
public readonly autoIncrementalBackupWindowInput: string;
```

- *Type:* string

---

##### `backupDeletionPolicyInput`<sup>Optional</sup> <a name="backupDeletionPolicyInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDeletionPolicyInput"></a>

```typescript
public readonly backupDeletionPolicyInput: string;
```

- *Type:* string

---

##### `backupDestinationDetailsInput`<sup>Optional</sup> <a name="backupDestinationDetailsInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDestinationDetailsInput"></a>

```typescript
public readonly backupDestinationDetailsInput: IResolvable | OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>[]

---

##### `retentionPeriodDaysInput`<sup>Optional</sup> <a name="retentionPeriodDaysInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.retentionPeriodDaysInput"></a>

```typescript
public readonly retentionPeriodDaysInput: number;
```

- *Type:* number

---

##### `autoBackupEnabled`<sup>Required</sup> <a name="autoBackupEnabled" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoBackupEnabled"></a>

```typescript
public readonly autoBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `autoFullBackupDay`<sup>Required</sup> <a name="autoFullBackupDay" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupDay"></a>

```typescript
public readonly autoFullBackupDay: string;
```

- *Type:* string

---

##### `autoFullBackupWindow`<sup>Required</sup> <a name="autoFullBackupWindow" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupWindow"></a>

```typescript
public readonly autoFullBackupWindow: string;
```

- *Type:* string

---

##### `autoIncrementalBackupWindow`<sup>Required</sup> <a name="autoIncrementalBackupWindow" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoIncrementalBackupWindow"></a>

```typescript
public readonly autoIncrementalBackupWindow: string;
```

- *Type:* string

---

##### `backupDeletionPolicy`<sup>Required</sup> <a name="backupDeletionPolicy" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDeletionPolicy"></a>

```typescript
public readonly backupDeletionPolicy: string;
```

- *Type:* string

---

##### `retentionPeriodDays`<sup>Required</sup> <a name="retentionPeriodDays" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.retentionPeriodDays"></a>

```typescript
public readonly retentionPeriodDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a>

---


### OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference <a name="OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

new oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDatabaseManagementConfig">putDatabaseManagementConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDbBackupConfig">putDbBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resetDatabaseManagementConfig">resetDatabaseManagementConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resetDbBackupConfig">resetDbBackupConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatabaseManagementConfig` <a name="putDatabaseManagementConfig" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDatabaseManagementConfig"></a>

```typescript
public putDatabaseManagementConfig(value: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDatabaseManagementConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a>

---

##### `putDbBackupConfig` <a name="putDbBackupConfig" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDbBackupConfig"></a>

```typescript
public putDbBackupConfig(value: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDbBackupConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a>

---

##### `resetDatabaseManagementConfig` <a name="resetDatabaseManagementConfig" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resetDatabaseManagementConfig"></a>

```typescript
public resetDatabaseManagementConfig(): void
```

##### `resetDbBackupConfig` <a name="resetDbBackupConfig" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resetDbBackupConfig"></a>

```typescript
public resetDbBackupConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.databaseManagementConfig">databaseManagementConfig</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbBackupConfig">dbBackupConfig</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.databaseManagementConfigInput">databaseManagementConfigInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbBackupConfigInput">dbBackupConfigInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbVersionInput">dbVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbVersion">dbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseManagementConfig`<sup>Required</sup> <a name="databaseManagementConfig" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.databaseManagementConfig"></a>

```typescript
public readonly databaseManagementConfig: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference</a>

---

##### `dbBackupConfig`<sup>Required</sup> <a name="dbBackupConfig" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbBackupConfig"></a>

```typescript
public readonly dbBackupConfig: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `databaseManagementConfigInput`<sup>Optional</sup> <a name="databaseManagementConfigInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.databaseManagementConfigInput"></a>

```typescript
public readonly databaseManagementConfigInput: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a>

---

##### `dbBackupConfigInput`<sup>Optional</sup> <a name="dbBackupConfigInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbBackupConfigInput"></a>

```typescript
public readonly dbBackupConfigInput: OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a>

---

##### `dbVersionInput`<sup>Optional</sup> <a name="dbVersionInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbVersionInput"></a>

```typescript
public readonly dbVersionInput: string;
```

- *Type:* string

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbVersion"></a>

```typescript
public readonly dbVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a>

---


### OracleDatabaseDbSystemPropertiesDbHomeOutputReference <a name="OracleDatabaseDbSystemPropertiesDbHomeOutputReference" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

new oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.putDatabase">putDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.resetIsUnifiedAuditingEnabled">resetIsUnifiedAuditingEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatabase` <a name="putDatabase" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.putDatabase"></a>

```typescript
public putDatabase(value: OracleDatabaseDbSystemPropertiesDbHomeDatabase): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase">OracleDatabaseDbSystemPropertiesDbHomeDatabase</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetIsUnifiedAuditingEnabled` <a name="resetIsUnifiedAuditingEnabled" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.resetIsUnifiedAuditingEnabled"></a>

```typescript
public resetIsUnifiedAuditingEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.database">database</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference">OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.databaseInput">databaseInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase">OracleDatabaseDbSystemPropertiesDbHomeDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.dbVersionInput">dbVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.isUnifiedAuditingEnabledInput">isUnifiedAuditingEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.dbVersion">dbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.isUnifiedAuditingEnabled">isUnifiedAuditingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome">OracleDatabaseDbSystemPropertiesDbHome</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.database"></a>

```typescript
public readonly database: OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference">OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: OracleDatabaseDbSystemPropertiesDbHomeDatabase;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase">OracleDatabaseDbSystemPropertiesDbHomeDatabase</a>

---

##### `dbVersionInput`<sup>Optional</sup> <a name="dbVersionInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.dbVersionInput"></a>

```typescript
public readonly dbVersionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `isUnifiedAuditingEnabledInput`<sup>Optional</sup> <a name="isUnifiedAuditingEnabledInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.isUnifiedAuditingEnabledInput"></a>

```typescript
public readonly isUnifiedAuditingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.dbVersion"></a>

```typescript
public readonly dbVersion: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `isUnifiedAuditingEnabled`<sup>Required</sup> <a name="isUnifiedAuditingEnabled" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.isUnifiedAuditingEnabled"></a>

```typescript
public readonly isUnifiedAuditingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleDatabaseDbSystemPropertiesDbHome;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome">OracleDatabaseDbSystemPropertiesDbHome</a>

---


### OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference <a name="OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

new oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.resetStorageManagement">resetStorageManagement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageManagement` <a name="resetStorageManagement" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.resetStorageManagement"></a>

```typescript
public resetStorageManagement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.storageManagementInput">storageManagementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.storageManagement">storageManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptions">OracleDatabaseDbSystemPropertiesDbSystemOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `storageManagementInput`<sup>Optional</sup> <a name="storageManagementInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.storageManagementInput"></a>

```typescript
public readonly storageManagementInput: string;
```

- *Type:* string

---

##### `storageManagement`<sup>Required</sup> <a name="storageManagement" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.storageManagement"></a>

```typescript
public readonly storageManagement: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleDatabaseDbSystemPropertiesDbSystemOptions;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptions">OracleDatabaseDbSystemPropertiesDbSystemOptions</a>

---


### OracleDatabaseDbSystemPropertiesOutputReference <a name="OracleDatabaseDbSystemPropertiesOutputReference" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

new oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.putDataCollectionOptions">putDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.putDbHome">putDbHome</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.putDbSystemOptions">putDbSystemOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.putTimeZone">putTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetComputeModel">resetComputeModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetDataCollectionOptions">resetDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetDataStorageSizeGb">resetDataStorageSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetDbHome">resetDbHome</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetDbSystemOptions">resetDbSystemOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetHostnamePrefix">resetHostnamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetMemorySizeGb">resetMemorySizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetNodeCount">resetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetRecoStorageSizeGb">resetRecoStorageSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataCollectionOptions` <a name="putDataCollectionOptions" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.putDataCollectionOptions"></a>

```typescript
public putDataCollectionOptions(value: OracleDatabaseDbSystemPropertiesDataCollectionOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.putDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptions">OracleDatabaseDbSystemPropertiesDataCollectionOptions</a>

---

##### `putDbHome` <a name="putDbHome" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.putDbHome"></a>

```typescript
public putDbHome(value: OracleDatabaseDbSystemPropertiesDbHome): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.putDbHome.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome">OracleDatabaseDbSystemPropertiesDbHome</a>

---

##### `putDbSystemOptions` <a name="putDbSystemOptions" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.putDbSystemOptions"></a>

```typescript
public putDbSystemOptions(value: OracleDatabaseDbSystemPropertiesDbSystemOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.putDbSystemOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptions">OracleDatabaseDbSystemPropertiesDbSystemOptions</a>

---

##### `putTimeZone` <a name="putTimeZone" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.putTimeZone"></a>

```typescript
public putTimeZone(value: OracleDatabaseDbSystemPropertiesTimeZone): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.putTimeZone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZone">OracleDatabaseDbSystemPropertiesTimeZone</a>

---

##### `resetComputeModel` <a name="resetComputeModel" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetComputeModel"></a>

```typescript
public resetComputeModel(): void
```

##### `resetDataCollectionOptions` <a name="resetDataCollectionOptions" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetDataCollectionOptions"></a>

```typescript
public resetDataCollectionOptions(): void
```

##### `resetDataStorageSizeGb` <a name="resetDataStorageSizeGb" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetDataStorageSizeGb"></a>

```typescript
public resetDataStorageSizeGb(): void
```

##### `resetDbHome` <a name="resetDbHome" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetDbHome"></a>

```typescript
public resetDbHome(): void
```

##### `resetDbSystemOptions` <a name="resetDbSystemOptions" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetDbSystemOptions"></a>

```typescript
public resetDbSystemOptions(): void
```

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetHostnamePrefix` <a name="resetHostnamePrefix" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetHostnamePrefix"></a>

```typescript
public resetHostnamePrefix(): void
```

##### `resetMemorySizeGb` <a name="resetMemorySizeGb" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetMemorySizeGb"></a>

```typescript
public resetMemorySizeGb(): void
```

##### `resetNodeCount` <a name="resetNodeCount" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetNodeCount"></a>

```typescript
public resetNodeCount(): void
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetPrivateIp"></a>

```typescript
public resetPrivateIp(): void
```

##### `resetRecoStorageSizeGb` <a name="resetRecoStorageSizeGb" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetRecoStorageSizeGb"></a>

```typescript
public resetRecoStorageSizeGb(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference">OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dbHome">dbHome</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference">OracleDatabaseDbSystemPropertiesDbHomeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dbSystemOptions">dbSystemOptions</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference">OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.timeZone">timeZone</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference">OracleDatabaseDbSystemPropertiesTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.computeCountInput">computeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.computeModelInput">computeModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.databaseEditionInput">databaseEditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dataCollectionOptionsInput">dataCollectionOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptions">OracleDatabaseDbSystemPropertiesDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dataStorageSizeGbInput">dataStorageSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dbHomeInput">dbHomeInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome">OracleDatabaseDbSystemPropertiesDbHome</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dbSystemOptionsInput">dbSystemOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptions">OracleDatabaseDbSystemPropertiesDbSystemOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.hostnamePrefixInput">hostnamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.initialDataStorageSizeGbInput">initialDataStorageSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.licenseModelInput">licenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.memorySizeGbInput">memorySizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.privateIpInput">privateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.recoStorageSizeGbInput">recoStorageSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.shapeInput">shapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.sshPublicKeysInput">sshPublicKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZone">OracleDatabaseDbSystemPropertiesTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.computeCount">computeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.computeModel">computeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.databaseEdition">databaseEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dataStorageSizeGb">dataStorageSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.hostnamePrefix">hostnamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.initialDataStorageSizeGb">initialDataStorageSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.memorySizeGb">memorySizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.recoStorageSizeGb">recoStorageSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.sshPublicKeys">sshPublicKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties">OracleDatabaseDbSystemProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataCollectionOptions`<sup>Required</sup> <a name="dataCollectionOptions" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dataCollectionOptions"></a>

```typescript
public readonly dataCollectionOptions: OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference">OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference</a>

---

##### `dbHome`<sup>Required</sup> <a name="dbHome" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dbHome"></a>

```typescript
public readonly dbHome: OracleDatabaseDbSystemPropertiesDbHomeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference">OracleDatabaseDbSystemPropertiesDbHomeOutputReference</a>

---

##### `dbSystemOptions`<sup>Required</sup> <a name="dbSystemOptions" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dbSystemOptions"></a>

```typescript
public readonly dbSystemOptions: OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference">OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: OracleDatabaseDbSystemPropertiesTimeZoneOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference">OracleDatabaseDbSystemPropertiesTimeZoneOutputReference</a>

---

##### `computeCountInput`<sup>Optional</sup> <a name="computeCountInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.computeCountInput"></a>

```typescript
public readonly computeCountInput: number;
```

- *Type:* number

---

##### `computeModelInput`<sup>Optional</sup> <a name="computeModelInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.computeModelInput"></a>

```typescript
public readonly computeModelInput: string;
```

- *Type:* string

---

##### `databaseEditionInput`<sup>Optional</sup> <a name="databaseEditionInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.databaseEditionInput"></a>

```typescript
public readonly databaseEditionInput: string;
```

- *Type:* string

---

##### `dataCollectionOptionsInput`<sup>Optional</sup> <a name="dataCollectionOptionsInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dataCollectionOptionsInput"></a>

```typescript
public readonly dataCollectionOptionsInput: OracleDatabaseDbSystemPropertiesDataCollectionOptions;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptions">OracleDatabaseDbSystemPropertiesDataCollectionOptions</a>

---

##### `dataStorageSizeGbInput`<sup>Optional</sup> <a name="dataStorageSizeGbInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dataStorageSizeGbInput"></a>

```typescript
public readonly dataStorageSizeGbInput: number;
```

- *Type:* number

---

##### `dbHomeInput`<sup>Optional</sup> <a name="dbHomeInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dbHomeInput"></a>

```typescript
public readonly dbHomeInput: OracleDatabaseDbSystemPropertiesDbHome;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome">OracleDatabaseDbSystemPropertiesDbHome</a>

---

##### `dbSystemOptionsInput`<sup>Optional</sup> <a name="dbSystemOptionsInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dbSystemOptionsInput"></a>

```typescript
public readonly dbSystemOptionsInput: OracleDatabaseDbSystemPropertiesDbSystemOptions;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptions">OracleDatabaseDbSystemPropertiesDbSystemOptions</a>

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `hostnamePrefixInput`<sup>Optional</sup> <a name="hostnamePrefixInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.hostnamePrefixInput"></a>

```typescript
public readonly hostnamePrefixInput: string;
```

- *Type:* string

---

##### `initialDataStorageSizeGbInput`<sup>Optional</sup> <a name="initialDataStorageSizeGbInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.initialDataStorageSizeGbInput"></a>

```typescript
public readonly initialDataStorageSizeGbInput: number;
```

- *Type:* number

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.licenseModelInput"></a>

```typescript
public readonly licenseModelInput: string;
```

- *Type:* string

---

##### `memorySizeGbInput`<sup>Optional</sup> <a name="memorySizeGbInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.memorySizeGbInput"></a>

```typescript
public readonly memorySizeGbInput: number;
```

- *Type:* number

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.nodeCountInput"></a>

```typescript
public readonly nodeCountInput: number;
```

- *Type:* number

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.privateIpInput"></a>

```typescript
public readonly privateIpInput: string;
```

- *Type:* string

---

##### `recoStorageSizeGbInput`<sup>Optional</sup> <a name="recoStorageSizeGbInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.recoStorageSizeGbInput"></a>

```typescript
public readonly recoStorageSizeGbInput: number;
```

- *Type:* number

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.shapeInput"></a>

```typescript
public readonly shapeInput: string;
```

- *Type:* string

---

##### `sshPublicKeysInput`<sup>Optional</sup> <a name="sshPublicKeysInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.sshPublicKeysInput"></a>

```typescript
public readonly sshPublicKeysInput: string[];
```

- *Type:* string[]

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: OracleDatabaseDbSystemPropertiesTimeZone;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZone">OracleDatabaseDbSystemPropertiesTimeZone</a>

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.computeModel"></a>

```typescript
public readonly computeModel: string;
```

- *Type:* string

---

##### `databaseEdition`<sup>Required</sup> <a name="databaseEdition" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.databaseEdition"></a>

```typescript
public readonly databaseEdition: string;
```

- *Type:* string

---

##### `dataStorageSizeGb`<sup>Required</sup> <a name="dataStorageSizeGb" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dataStorageSizeGb"></a>

```typescript
public readonly dataStorageSizeGb: number;
```

- *Type:* number

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `hostnamePrefix`<sup>Required</sup> <a name="hostnamePrefix" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.hostnamePrefix"></a>

```typescript
public readonly hostnamePrefix: string;
```

- *Type:* string

---

##### `initialDataStorageSizeGb`<sup>Required</sup> <a name="initialDataStorageSizeGb" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.initialDataStorageSizeGb"></a>

```typescript
public readonly initialDataStorageSizeGb: number;
```

- *Type:* number

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `memorySizeGb`<sup>Required</sup> <a name="memorySizeGb" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.memorySizeGb"></a>

```typescript
public readonly memorySizeGb: number;
```

- *Type:* number

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `recoStorageSizeGb`<sup>Required</sup> <a name="recoStorageSizeGb" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.recoStorageSizeGb"></a>

```typescript
public readonly recoStorageSizeGb: number;
```

- *Type:* number

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.sshPublicKeys"></a>

```typescript
public readonly sshPublicKeys: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleDatabaseDbSystemProperties;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties">OracleDatabaseDbSystemProperties</a>

---


### OracleDatabaseDbSystemPropertiesTimeZoneOutputReference <a name="OracleDatabaseDbSystemPropertiesTimeZoneOutputReference" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

new oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.resetId"></a>

```typescript
public resetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZone">OracleDatabaseDbSystemPropertiesTimeZone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleDatabaseDbSystemPropertiesTimeZone;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZone">OracleDatabaseDbSystemPropertiesTimeZone</a>

---


### OracleDatabaseDbSystemTimeoutsOutputReference <a name="OracleDatabaseDbSystemTimeoutsOutputReference" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseDbSystem } from '@cdktn/provider-google'

new oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts">OracleDatabaseDbSystemTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OracleDatabaseDbSystemTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts">OracleDatabaseDbSystemTimeouts</a>

---



