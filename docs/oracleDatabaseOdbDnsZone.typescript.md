# `oracleDatabaseOdbDnsZone` Submodule <a name="`oracleDatabaseOdbDnsZone` Submodule" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseOdbDnsZone <a name="OracleDatabaseOdbDnsZone" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone google_oracle_database_odb_dns_zone}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer"></a>

```typescript
import { oracleDatabaseOdbDnsZone } from '@cdktn/provider-google'

new oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone(scope: Construct, id: string, config: OracleDatabaseOdbDnsZoneConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig">OracleDatabaseOdbDnsZoneConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig">OracleDatabaseOdbDnsZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.putTimeouts"></a>

```typescript
public putTimeouts(value: OracleDatabaseOdbDnsZoneTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts">OracleDatabaseOdbDnsZoneTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OracleDatabaseOdbDnsZone resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isConstruct"></a>

```typescript
import { oracleDatabaseOdbDnsZone } from '@cdktn/provider-google'

oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isTerraformElement"></a>

```typescript
import { oracleDatabaseOdbDnsZone } from '@cdktn/provider-google'

oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isTerraformResource"></a>

```typescript
import { oracleDatabaseOdbDnsZone } from '@cdktn/provider-google'

oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.generateConfigForImport"></a>

```typescript
import { oracleDatabaseOdbDnsZone } from '@cdktn/provider-google'

oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OracleDatabaseOdbDnsZone resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OracleDatabaseOdbDnsZone to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OracleDatabaseOdbDnsZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OracleDatabaseOdbDnsZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference">OracleDatabaseOdbDnsZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbDnsZoneIdInput">odbDnsZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbnetworkInput">odbnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts">OracleDatabaseOdbDnsZoneTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbDnsZoneId">odbDnsZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbnetwork">odbnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.timeouts"></a>

```typescript
public readonly timeouts: OracleDatabaseOdbDnsZoneTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference">OracleDatabaseOdbDnsZoneTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `odbDnsZoneIdInput`<sup>Optional</sup> <a name="odbDnsZoneIdInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbDnsZoneIdInput"></a>

```typescript
public readonly odbDnsZoneIdInput: string;
```

- *Type:* string

---

##### `odbnetworkInput`<sup>Optional</sup> <a name="odbnetworkInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbnetworkInput"></a>

```typescript
public readonly odbnetworkInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OracleDatabaseOdbDnsZoneTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts">OracleDatabaseOdbDnsZoneTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `odbDnsZoneId`<sup>Required</sup> <a name="odbDnsZoneId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbDnsZoneId"></a>

```typescript
public readonly odbDnsZoneId: string;
```

- *Type:* string

---

##### `odbnetwork`<sup>Required</sup> <a name="odbnetwork" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbnetwork"></a>

```typescript
public readonly odbnetwork: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseOdbDnsZoneConfig <a name="OracleDatabaseOdbDnsZoneConfig" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.Initializer"></a>

```typescript
import { oracleDatabaseOdbDnsZone } from '@cdktn/provider-google'

const oracleDatabaseOdbDnsZoneConfig: oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.domain">domain</a></code> | <code>string</code> | The DNS suffix for the zone. Ex: abc.example.com. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.odbDnsZoneId">odbDnsZoneId</a></code> | <code>string</code> | The ID of the OdbDnsZone to create. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.odbnetwork">odbnetwork</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#id OracleDatabaseOdbDnsZone#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels or tags associated with the resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#project OracleDatabaseOdbDnsZone#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts">OracleDatabaseOdbDnsZoneTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

The DNS suffix for the zone. Ex: abc.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#domain OracleDatabaseOdbDnsZone#domain}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#location OracleDatabaseOdbDnsZone#location}

---

##### `odbDnsZoneId`<sup>Required</sup> <a name="odbDnsZoneId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.odbDnsZoneId"></a>

```typescript
public readonly odbDnsZoneId: string;
```

- *Type:* string

The ID of the OdbDnsZone to create.

This value is restricted
to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#odb_dns_zone_id OracleDatabaseOdbDnsZone#odb_dns_zone_id}

---

##### `odbnetwork`<sup>Required</sup> <a name="odbnetwork" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.odbnetwork"></a>

```typescript
public readonly odbnetwork: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#odbnetwork OracleDatabaseOdbDnsZone#odbnetwork}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#deletion_policy OracleDatabaseOdbDnsZone#deletion_policy}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#deletion_protection OracleDatabaseOdbDnsZone#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#id OracleDatabaseOdbDnsZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels or tags associated with the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#labels OracleDatabaseOdbDnsZone#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#project OracleDatabaseOdbDnsZone#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OracleDatabaseOdbDnsZoneTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts">OracleDatabaseOdbDnsZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#timeouts OracleDatabaseOdbDnsZone#timeouts}

---

### OracleDatabaseOdbDnsZoneTimeouts <a name="OracleDatabaseOdbDnsZoneTimeouts" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts.Initializer"></a>

```typescript
import { oracleDatabaseOdbDnsZone } from '@cdktn/provider-google'

const oracleDatabaseOdbDnsZoneTimeouts: oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#create OracleDatabaseOdbDnsZone#create}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#delete OracleDatabaseOdbDnsZone#delete}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#update OracleDatabaseOdbDnsZone#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#create OracleDatabaseOdbDnsZone#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#delete OracleDatabaseOdbDnsZone#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#update OracleDatabaseOdbDnsZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseOdbDnsZoneTimeoutsOutputReference <a name="OracleDatabaseOdbDnsZoneTimeoutsOutputReference" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseOdbDnsZone } from '@cdktn/provider-google'

new oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts">OracleDatabaseOdbDnsZoneTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OracleDatabaseOdbDnsZoneTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts">OracleDatabaseOdbDnsZoneTimeouts</a>

---



