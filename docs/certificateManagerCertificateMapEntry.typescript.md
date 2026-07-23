# `certificateManagerCertificateMapEntry` Submodule <a name="`certificateManagerCertificateMapEntry` Submodule" id="@cdktn/provider-google.certificateManagerCertificateMapEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateManagerCertificateMapEntry <a name="CertificateManagerCertificateMapEntry" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry google_certificate_manager_certificate_map_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer"></a>

```typescript
import { certificateManagerCertificateMapEntry } from '@cdktn/provider-google'

new certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry(scope: Construct, id: string, config: CertificateManagerCertificateMapEntryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig">CertificateManagerCertificateMapEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig">CertificateManagerCertificateMapEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetMatcher">resetMatcher</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.putTimeouts"></a>

```typescript
public putTimeouts(value: CertificateManagerCertificateMapEntryTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts">CertificateManagerCertificateMapEntryTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHostname` <a name="resetHostname" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMatcher` <a name="resetMatcher" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetMatcher"></a>

```typescript
public resetMatcher(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CertificateManagerCertificateMapEntry resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isConstruct"></a>

```typescript
import { certificateManagerCertificateMapEntry } from '@cdktn/provider-google'

certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isTerraformElement"></a>

```typescript
import { certificateManagerCertificateMapEntry } from '@cdktn/provider-google'

certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isTerraformResource"></a>

```typescript
import { certificateManagerCertificateMapEntry } from '@cdktn/provider-google'

certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.generateConfigForImport"></a>

```typescript
import { certificateManagerCertificateMapEntry } from '@cdktn/provider-google'

certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CertificateManagerCertificateMapEntry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CertificateManagerCertificateMapEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CertificateManagerCertificateMapEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CertificateManagerCertificateMapEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference">CertificateManagerCertificateMapEntryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.certificatesInput">certificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.mapInput">mapInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.matcherInput">matcherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts">CertificateManagerCertificateMapEntryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.certificates">certificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.map">map</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.matcher">matcher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.timeouts"></a>

```typescript
public readonly timeouts: CertificateManagerCertificateMapEntryTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference">CertificateManagerCertificateMapEntryTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `certificatesInput`<sup>Optional</sup> <a name="certificatesInput" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.certificatesInput"></a>

```typescript
public readonly certificatesInput: string[];
```

- *Type:* string[]

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mapInput`<sup>Optional</sup> <a name="mapInput" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.mapInput"></a>

```typescript
public readonly mapInput: string;
```

- *Type:* string

---

##### `matcherInput`<sup>Optional</sup> <a name="matcherInput" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.matcherInput"></a>

```typescript
public readonly matcherInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CertificateManagerCertificateMapEntryTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts">CertificateManagerCertificateMapEntryTimeouts</a>

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.certificates"></a>

```typescript
public readonly certificates: string[];
```

- *Type:* string[]

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `map`<sup>Required</sup> <a name="map" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.map"></a>

```typescript
public readonly map: string;
```

- *Type:* string

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.matcher"></a>

```typescript
public readonly matcher: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateManagerCertificateMapEntryConfig <a name="CertificateManagerCertificateMapEntryConfig" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.Initializer"></a>

```typescript
import { certificateManagerCertificateMapEntry } from '@cdktn/provider-google'

const certificateManagerCertificateMapEntryConfig: certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.certificates">certificates</a></code> | <code>string[]</code> | A set of Certificates defines for the given hostname. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.map">map</a></code> | <code>string</code> | A map entry that is inputted into the certificate map. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.name">name</a></code> | <code>string</code> | A user-defined name of the Certificate Map Entry. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.description">description</a></code> | <code>string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.hostname">hostname</a></code> | <code>string</code> | A Hostname (FQDN, e.g. example.com) or a wildcard hostname expression (*.example.com) for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for selecting a proper certificate. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#id CertificateManagerCertificateMapEntry#id}. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of labels associated with a Certificate Map Entry. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.matcher">matcher</a></code> | <code>string</code> | A predefined matcher for particular cases, other than SNI selection. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#project CertificateManagerCertificateMapEntry#project}. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts">CertificateManagerCertificateMapEntryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.certificates"></a>

```typescript
public readonly certificates: string[];
```

- *Type:* string[]

A set of Certificates defines for the given hostname.

There can be defined up to fifteen certificates in each Certificate Map Entry.
Each certificate must match pattern projects/* /locations/* /certificates/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#certificates CertificateManagerCertificateMapEntry#certificates}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `map`<sup>Required</sup> <a name="map" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.map"></a>

```typescript
public readonly map: string;
```

- *Type:* string

A map entry that is inputted into the certificate map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#map CertificateManagerCertificateMapEntry#map}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A user-defined name of the Certificate Map Entry.

Certificate Map Entry
names must be unique globally and match pattern
'projects/* /locations/* /certificateMaps/* /certificateMapEntries/*'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#name CertificateManagerCertificateMapEntry#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#deletion_policy CertificateManagerCertificateMapEntry#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#description CertificateManagerCertificateMapEntry#description}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

A Hostname (FQDN, e.g. example.com) or a wildcard hostname expression (*.example.com) for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for selecting a proper certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#hostname CertificateManagerCertificateMapEntry#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#id CertificateManagerCertificateMapEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of labels associated with a Certificate Map Entry.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.


**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#labels CertificateManagerCertificateMapEntry#labels}

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.matcher"></a>

```typescript
public readonly matcher: string;
```

- *Type:* string

A predefined matcher for particular cases, other than SNI selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#matcher CertificateManagerCertificateMapEntry#matcher}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#project CertificateManagerCertificateMapEntry#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CertificateManagerCertificateMapEntryTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts">CertificateManagerCertificateMapEntryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#timeouts CertificateManagerCertificateMapEntry#timeouts}

---

### CertificateManagerCertificateMapEntryTimeouts <a name="CertificateManagerCertificateMapEntryTimeouts" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts.Initializer"></a>

```typescript
import { certificateManagerCertificateMapEntry } from '@cdktn/provider-google'

const certificateManagerCertificateMapEntryTimeouts: certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#create CertificateManagerCertificateMapEntry#create}. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#delete CertificateManagerCertificateMapEntry#delete}. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#update CertificateManagerCertificateMapEntry#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#create CertificateManagerCertificateMapEntry#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#delete CertificateManagerCertificateMapEntry#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#update CertificateManagerCertificateMapEntry#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificateManagerCertificateMapEntryTimeoutsOutputReference <a name="CertificateManagerCertificateMapEntryTimeoutsOutputReference" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer"></a>

```typescript
import { certificateManagerCertificateMapEntry } from '@cdktn/provider-google'

new certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts">CertificateManagerCertificateMapEntryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificateManagerCertificateMapEntryTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts">CertificateManagerCertificateMapEntryTimeouts</a>

---



