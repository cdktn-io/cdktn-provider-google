# `bigqueryDataTransferDataSourceEnrollment` Submodule <a name="`bigqueryDataTransferDataSourceEnrollment` Submodule" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryDataTransferDataSourceEnrollment <a name="BigqueryDataTransferDataSourceEnrollment" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment google_bigquery_data_transfer_data_source_enrollment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer"></a>

```typescript
import { bigqueryDataTransferDataSourceEnrollment } from '@cdktn/provider-google'

new bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment(scope: Construct, id: string, config: BigqueryDataTransferDataSourceEnrollmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig">BigqueryDataTransferDataSourceEnrollmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig">BigqueryDataTransferDataSourceEnrollmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetUnenrollLocation">resetUnenrollLocation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.putTimeouts"></a>

```typescript
public putTimeouts(value: BigqueryDataTransferDataSourceEnrollmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts">BigqueryDataTransferDataSourceEnrollmentTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUnenrollLocation` <a name="resetUnenrollLocation" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetUnenrollLocation"></a>

```typescript
public resetUnenrollLocation(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BigqueryDataTransferDataSourceEnrollment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isConstruct"></a>

```typescript
import { bigqueryDataTransferDataSourceEnrollment } from '@cdktn/provider-google'

bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isTerraformElement"></a>

```typescript
import { bigqueryDataTransferDataSourceEnrollment } from '@cdktn/provider-google'

bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isTerraformResource"></a>

```typescript
import { bigqueryDataTransferDataSourceEnrollment } from '@cdktn/provider-google'

bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.generateConfigForImport"></a>

```typescript
import { bigqueryDataTransferDataSourceEnrollment } from '@cdktn/provider-google'

bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BigqueryDataTransferDataSourceEnrollment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigqueryDataTransferDataSourceEnrollment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigqueryDataTransferDataSourceEnrollment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BigqueryDataTransferDataSourceEnrollment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.authorizationType">authorizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dataRefreshType">dataRefreshType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.defaultDataRefreshWindowDays">defaultDataRefreshWindowDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.defaultSchedule">defaultSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.helpUrl">helpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.manualRunsDisabled">manualRunsDisabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.minimumScheduleInterval">minimumScheduleInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList">BigqueryDataTransferDataSourceEnrollmentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.supportsCustomSchedule">supportsCustomSchedule</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference">BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.updateDeadlineSeconds">updateDeadlineSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dataSourceIdInput">dataSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts">BigqueryDataTransferDataSourceEnrollmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.unenrollLocationInput">unenrollLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.unenrollLocation">unenrollLocation</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.authorizationType"></a>

```typescript
public readonly authorizationType: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `dataRefreshType`<sup>Required</sup> <a name="dataRefreshType" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dataRefreshType"></a>

```typescript
public readonly dataRefreshType: string;
```

- *Type:* string

---

##### `defaultDataRefreshWindowDays`<sup>Required</sup> <a name="defaultDataRefreshWindowDays" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.defaultDataRefreshWindowDays"></a>

```typescript
public readonly defaultDataRefreshWindowDays: number;
```

- *Type:* number

---

##### `defaultSchedule`<sup>Required</sup> <a name="defaultSchedule" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.defaultSchedule"></a>

```typescript
public readonly defaultSchedule: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `helpUrl`<sup>Required</sup> <a name="helpUrl" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.helpUrl"></a>

```typescript
public readonly helpUrl: string;
```

- *Type:* string

---

##### `manualRunsDisabled`<sup>Required</sup> <a name="manualRunsDisabled" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.manualRunsDisabled"></a>

```typescript
public readonly manualRunsDisabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `minimumScheduleInterval`<sup>Required</sup> <a name="minimumScheduleInterval" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.minimumScheduleInterval"></a>

```typescript
public readonly minimumScheduleInterval: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.parameters"></a>

```typescript
public readonly parameters: BigqueryDataTransferDataSourceEnrollmentParametersList;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList">BigqueryDataTransferDataSourceEnrollmentParametersList</a>

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `supportsCustomSchedule`<sup>Required</sup> <a name="supportsCustomSchedule" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.supportsCustomSchedule"></a>

```typescript
public readonly supportsCustomSchedule: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.timeouts"></a>

```typescript
public readonly timeouts: BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference">BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference</a>

---

##### `updateDeadlineSeconds`<sup>Required</sup> <a name="updateDeadlineSeconds" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.updateDeadlineSeconds"></a>

```typescript
public readonly updateDeadlineSeconds: number;
```

- *Type:* number

---

##### `dataSourceIdInput`<sup>Optional</sup> <a name="dataSourceIdInput" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dataSourceIdInput"></a>

```typescript
public readonly dataSourceIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BigqueryDataTransferDataSourceEnrollmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts">BigqueryDataTransferDataSourceEnrollmentTimeouts</a>

---

##### `unenrollLocationInput`<sup>Optional</sup> <a name="unenrollLocationInput" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.unenrollLocationInput"></a>

```typescript
public readonly unenrollLocationInput: string;
```

- *Type:* string

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `unenrollLocation`<sup>Required</sup> <a name="unenrollLocation" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.unenrollLocation"></a>

```typescript
public readonly unenrollLocation: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryDataTransferDataSourceEnrollmentConfig <a name="BigqueryDataTransferDataSourceEnrollmentConfig" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.Initializer"></a>

```typescript
import { bigqueryDataTransferDataSourceEnrollment } from '@cdktn/provider-google'

const bigqueryDataTransferDataSourceEnrollmentConfig: bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | The ID of the data source to enroll. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#id BigqueryDataTransferDataSourceEnrollment#id}. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#project BigqueryDataTransferDataSourceEnrollment#project}. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts">BigqueryDataTransferDataSourceEnrollmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.unenrollLocation">unenrollLocation</a></code> | <code>string</code> | The location whose 'unenrollDataSources' endpoint is called when this resource is destroyed. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

The ID of the data source to enroll.

For Google Cloud Carbon Footprint exports this is
'61cede5a-0000-2440-ad42-883d24f8f7b8'. Call 'projects.dataSources.list' to see the data
sources currently enrolled in a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#data_source_id BigqueryDataTransferDataSourceEnrollment#data_source_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#deletion_policy BigqueryDataTransferDataSourceEnrollment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#id BigqueryDataTransferDataSourceEnrollment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#project BigqueryDataTransferDataSourceEnrollment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BigqueryDataTransferDataSourceEnrollmentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts">BigqueryDataTransferDataSourceEnrollmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#timeouts BigqueryDataTransferDataSourceEnrollment#timeouts}

---

##### `unenrollLocation`<sup>Optional</sup> <a name="unenrollLocation" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.unenrollLocation"></a>

```typescript
public readonly unenrollLocation: string;
```

- *Type:* string

The location whose 'unenrollDataSources' endpoint is called when this resource is destroyed.

Enrollment itself is project-wide and unenrolling through any location removes it everywhere;
this only exists because the API offers no project-level unenroll method. Override it only if
'us' is not routable for the project, for example under a data-residency organization policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#unenroll_location BigqueryDataTransferDataSourceEnrollment#unenroll_location}

---

### BigqueryDataTransferDataSourceEnrollmentParameters <a name="BigqueryDataTransferDataSourceEnrollmentParameters" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParameters.Initializer"></a>

```typescript
import { bigqueryDataTransferDataSourceEnrollment } from '@cdktn/provider-google'

const bigqueryDataTransferDataSourceEnrollmentParameters: bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParameters = { ... }
```


### BigqueryDataTransferDataSourceEnrollmentTimeouts <a name="BigqueryDataTransferDataSourceEnrollmentTimeouts" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts.Initializer"></a>

```typescript
import { bigqueryDataTransferDataSourceEnrollment } from '@cdktn/provider-google'

const bigqueryDataTransferDataSourceEnrollmentTimeouts: bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#create BigqueryDataTransferDataSourceEnrollment#create}. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#delete BigqueryDataTransferDataSourceEnrollment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#create BigqueryDataTransferDataSourceEnrollment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#delete BigqueryDataTransferDataSourceEnrollment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryDataTransferDataSourceEnrollmentParametersList <a name="BigqueryDataTransferDataSourceEnrollmentParametersList" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.Initializer"></a>

```typescript
import { bigqueryDataTransferDataSourceEnrollment } from '@cdktn/provider-google'

new bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.get"></a>

```typescript
public get(index: number): BigqueryDataTransferDataSourceEnrollmentParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BigqueryDataTransferDataSourceEnrollmentParametersOutputReference <a name="BigqueryDataTransferDataSourceEnrollmentParametersOutputReference" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer"></a>

```typescript
import { bigqueryDataTransferDataSourceEnrollment } from '@cdktn/provider-google'

new bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.deprecated">deprecated</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.immutable">immutable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxListSize">maxListSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxValue">maxValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.minValue">minValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.paramId">paramId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.required">required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationDescription">validationDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationHelpUrl">validationHelpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationRegex">validationRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParameters">BigqueryDataTransferDataSourceEnrollmentParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]

---

##### `deprecated`<sup>Required</sup> <a name="deprecated" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.deprecated"></a>

```typescript
public readonly deprecated: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `immutable`<sup>Required</sup> <a name="immutable" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.immutable"></a>

```typescript
public readonly immutable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `maxListSize`<sup>Required</sup> <a name="maxListSize" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxListSize"></a>

```typescript
public readonly maxListSize: number;
```

- *Type:* number

---

##### `maxValue`<sup>Required</sup> <a name="maxValue" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxValue"></a>

```typescript
public readonly maxValue: number;
```

- *Type:* number

---

##### `minValue`<sup>Required</sup> <a name="minValue" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.minValue"></a>

```typescript
public readonly minValue: number;
```

- *Type:* number

---

##### `paramId`<sup>Required</sup> <a name="paramId" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.paramId"></a>

```typescript
public readonly paramId: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.required"></a>

```typescript
public readonly required: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `validationDescription`<sup>Required</sup> <a name="validationDescription" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationDescription"></a>

```typescript
public readonly validationDescription: string;
```

- *Type:* string

---

##### `validationHelpUrl`<sup>Required</sup> <a name="validationHelpUrl" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationHelpUrl"></a>

```typescript
public readonly validationHelpUrl: string;
```

- *Type:* string

---

##### `validationRegex`<sup>Required</sup> <a name="validationRegex" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationRegex"></a>

```typescript
public readonly validationRegex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryDataTransferDataSourceEnrollmentParameters;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParameters">BigqueryDataTransferDataSourceEnrollmentParameters</a>

---


### BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference <a name="BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { bigqueryDataTransferDataSourceEnrollment } from '@cdktn/provider-google'

new bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts">BigqueryDataTransferDataSourceEnrollmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BigqueryDataTransferDataSourceEnrollmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts">BigqueryDataTransferDataSourceEnrollmentTimeouts</a>

---



