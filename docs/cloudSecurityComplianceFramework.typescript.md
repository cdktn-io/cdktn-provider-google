# `cloudSecurityComplianceFramework` Submodule <a name="`cloudSecurityComplianceFramework` Submodule" id="@cdktn/provider-google.cloudSecurityComplianceFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudSecurityComplianceFramework <a name="CloudSecurityComplianceFramework" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework google_cloud_security_compliance_framework}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer"></a>

```typescript
import { cloudSecurityComplianceFramework } from '@cdktn/provider-google'

new cloudSecurityComplianceFramework.CloudSecurityComplianceFramework(scope: Construct, id: string, config: CloudSecurityComplianceFrameworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig">CloudSecurityComplianceFrameworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig">CloudSecurityComplianceFrameworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.putCloudControlDetails">putCloudControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetCloudControlDetails">resetCloudControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudControlDetails` <a name="putCloudControlDetails" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.putCloudControlDetails"></a>

```typescript
public putCloudControlDetails(value: IResolvable | CloudSecurityComplianceFrameworkCloudControlDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.putCloudControlDetails.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudSecurityComplianceFrameworkTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts">CloudSecurityComplianceFrameworkTimeouts</a>

---

##### `resetCloudControlDetails` <a name="resetCloudControlDetails" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetCloudControlDetails"></a>

```typescript
public resetCloudControlDetails(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudSecurityComplianceFramework resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isConstruct"></a>

```typescript
import { cloudSecurityComplianceFramework } from '@cdktn/provider-google'

cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isTerraformElement"></a>

```typescript
import { cloudSecurityComplianceFramework } from '@cdktn/provider-google'

cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isTerraformResource"></a>

```typescript
import { cloudSecurityComplianceFramework } from '@cdktn/provider-google'

cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.generateConfigForImport"></a>

```typescript
import { cloudSecurityComplianceFramework } from '@cdktn/provider-google'

cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudSecurityComplianceFramework resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudSecurityComplianceFramework to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudSecurityComplianceFramework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudSecurityComplianceFramework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.category">category</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.cloudControlDetails">cloudControlDetails</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList">CloudSecurityComplianceFrameworkCloudControlDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.majorRevisionId">majorRevisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.supportedCloudProviders">supportedCloudProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.supportedEnforcementModes">supportedEnforcementModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.supportedTargetResourceTypes">supportedTargetResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference">CloudSecurityComplianceFrameworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.cloudControlDetailsInput">cloudControlDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.frameworkIdInput">frameworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts">CloudSecurityComplianceFrameworkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.frameworkId">frameworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.organization">organization</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.category"></a>

```typescript
public readonly category: string[];
```

- *Type:* string[]

---

##### `cloudControlDetails`<sup>Required</sup> <a name="cloudControlDetails" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.cloudControlDetails"></a>

```typescript
public readonly cloudControlDetails: CloudSecurityComplianceFrameworkCloudControlDetailsList;
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList">CloudSecurityComplianceFrameworkCloudControlDetailsList</a>

---

##### `majorRevisionId`<sup>Required</sup> <a name="majorRevisionId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.majorRevisionId"></a>

```typescript
public readonly majorRevisionId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `supportedCloudProviders`<sup>Required</sup> <a name="supportedCloudProviders" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.supportedCloudProviders"></a>

```typescript
public readonly supportedCloudProviders: string[];
```

- *Type:* string[]

---

##### `supportedEnforcementModes`<sup>Required</sup> <a name="supportedEnforcementModes" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.supportedEnforcementModes"></a>

```typescript
public readonly supportedEnforcementModes: string[];
```

- *Type:* string[]

---

##### `supportedTargetResourceTypes`<sup>Required</sup> <a name="supportedTargetResourceTypes" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.supportedTargetResourceTypes"></a>

```typescript
public readonly supportedTargetResourceTypes: string[];
```

- *Type:* string[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.timeouts"></a>

```typescript
public readonly timeouts: CloudSecurityComplianceFrameworkTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference">CloudSecurityComplianceFrameworkTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `cloudControlDetailsInput`<sup>Optional</sup> <a name="cloudControlDetailsInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.cloudControlDetailsInput"></a>

```typescript
public readonly cloudControlDetailsInput: IResolvable | CloudSecurityComplianceFrameworkCloudControlDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `frameworkIdInput`<sup>Optional</sup> <a name="frameworkIdInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.frameworkIdInput"></a>

```typescript
public readonly frameworkIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudSecurityComplianceFrameworkTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts">CloudSecurityComplianceFrameworkTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `frameworkId`<sup>Required</sup> <a name="frameworkId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.frameworkId"></a>

```typescript
public readonly frameworkId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFramework.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudSecurityComplianceFrameworkCloudControlDetails <a name="CloudSecurityComplianceFrameworkCloudControlDetails" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails.Initializer"></a>

```typescript
import { cloudSecurityComplianceFramework } from '@cdktn/provider-google'

const cloudSecurityComplianceFrameworkCloudControlDetails: cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails.property.majorRevisionId">majorRevisionId</a></code> | <code>string</code> | Major revision of cloudcontrol. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails.property.name">name</a></code> | <code>string</code> | The name of the CloudControl in the format: “organizations/{organization}/locations/{location}/cloudControls/{cloud-control}”. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters">CloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>[]</code> | parameters block. |

---

##### `majorRevisionId`<sup>Required</sup> <a name="majorRevisionId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails.property.majorRevisionId"></a>

```typescript
public readonly majorRevisionId: string;
```

- *Type:* string

Major revision of cloudcontrol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#major_revision_id CloudSecurityComplianceFramework#major_revision_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the CloudControl in the format: “organizations/{organization}/locations/{location}/cloudControls/{cloud-control}”.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#name CloudSecurityComplianceFramework#name}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails.property.parameters"></a>

```typescript
public readonly parameters: IResolvable | CloudSecurityComplianceFrameworkCloudControlDetailsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters">CloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>[]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#parameters CloudSecurityComplianceFramework#parameters}

---

### CloudSecurityComplianceFrameworkCloudControlDetailsParameters <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParameters" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters.Initializer"></a>

```typescript
import { cloudSecurityComplianceFramework } from '@cdktn/provider-google'

const cloudSecurityComplianceFrameworkCloudControlDetailsParameters: cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters.property.name">name</a></code> | <code>string</code> | The name of the parameter. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters.property.parameterValue">parameterValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a></code> | parameter_value block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#name CloudSecurityComplianceFramework#name}

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters.property.parameterValue"></a>

```typescript
public readonly parameterValue: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue;
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a>

parameter_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#parameter_value CloudSecurityComplianceFramework#parameter_value}

---

### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.Initializer"></a>

```typescript
import { cloudSecurityComplianceFramework } from '@cdktn/provider-google'

const cloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue: cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.boolValue">boolValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | Represents a boolean value. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.numberValue">numberValue</a></code> | <code>number</code> | Represents a double value. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.oneofValue">oneofValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a></code> | oneof_value block. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.stringListValue">stringListValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a></code> | string_list_value block. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.stringValue">stringValue</a></code> | <code>string</code> | Represents a string value. |

---

##### `boolValue`<sup>Optional</sup> <a name="boolValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.boolValue"></a>

```typescript
public readonly boolValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#bool_value CloudSecurityComplianceFramework#bool_value}

---

##### `numberValue`<sup>Optional</sup> <a name="numberValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.numberValue"></a>

```typescript
public readonly numberValue: number;
```

- *Type:* number

Represents a double value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#number_value CloudSecurityComplianceFramework#number_value}

---

##### `oneofValue`<sup>Optional</sup> <a name="oneofValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.oneofValue"></a>

```typescript
public readonly oneofValue: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue;
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a>

oneof_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#oneof_value CloudSecurityComplianceFramework#oneof_value}

---

##### `stringListValue`<sup>Optional</sup> <a name="stringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.stringListValue"></a>

```typescript
public readonly stringListValue: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue;
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a>

string_list_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#string_list_value CloudSecurityComplianceFramework#string_list_value}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#string_value CloudSecurityComplianceFramework#string_value}

---

### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue.Initializer"></a>

```typescript
import { cloudSecurityComplianceFramework } from '@cdktn/provider-google'

const cloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue: cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue.property.name">name</a></code> | <code>string</code> | The name of the parameter. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue.property.parameterValue">parameterValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a></code> | parameter_value block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#name CloudSecurityComplianceFramework#name}

---

##### `parameterValue`<sup>Optional</sup> <a name="parameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue.property.parameterValue"></a>

```typescript
public readonly parameterValue: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue;
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

parameter_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#parameter_value CloudSecurityComplianceFramework#parameter_value}

---

### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.Initializer"></a>

```typescript
import { cloudSecurityComplianceFramework } from '@cdktn/provider-google'

const cloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue: cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.boolValue">boolValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | Represents a boolean value. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.numberValue">numberValue</a></code> | <code>number</code> | Represents a double value. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringListValue">stringListValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a></code> | string_list_value block. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringValue">stringValue</a></code> | <code>string</code> | Represents a string value. |

---

##### `boolValue`<sup>Optional</sup> <a name="boolValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.boolValue"></a>

```typescript
public readonly boolValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Represents a boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#bool_value CloudSecurityComplianceFramework#bool_value}

---

##### `numberValue`<sup>Optional</sup> <a name="numberValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.numberValue"></a>

```typescript
public readonly numberValue: number;
```

- *Type:* number

Represents a double value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#number_value CloudSecurityComplianceFramework#number_value}

---

##### `stringListValue`<sup>Optional</sup> <a name="stringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringListValue"></a>

```typescript
public readonly stringListValue: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue;
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

string_list_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#string_list_value CloudSecurityComplianceFramework#string_list_value}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

Represents a string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#string_value CloudSecurityComplianceFramework#string_value}

---

### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.Initializer"></a>

```typescript
import { cloudSecurityComplianceFramework } from '@cdktn/provider-google'

const cloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue: cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.property.values">values</a></code> | <code>string[]</code> | The strings in the list. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The strings in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#values CloudSecurityComplianceFramework#values}

---

### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue.Initializer"></a>

```typescript
import { cloudSecurityComplianceFramework } from '@cdktn/provider-google'

const cloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue: cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue.property.values">values</a></code> | <code>string[]</code> | The strings in the list. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The strings in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#values CloudSecurityComplianceFramework#values}

---

### CloudSecurityComplianceFrameworkConfig <a name="CloudSecurityComplianceFrameworkConfig" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.Initializer"></a>

```typescript
import { cloudSecurityComplianceFramework } from '@cdktn/provider-google'

const cloudSecurityComplianceFrameworkConfig: cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.frameworkId">frameworkId</a></code> | <code>string</code> | ID of the framework. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.organization">organization</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.cloudControlDetails">cloudControlDetails</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a>[]</code> | cloud_control_details block. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.description">description</a></code> | <code>string</code> | The description of the framework. The maximum length is 2000 characters. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name of the framework. The maximum length is 200 characters. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#id CloudSecurityComplianceFramework#id}. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts">CloudSecurityComplianceFrameworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `frameworkId`<sup>Required</sup> <a name="frameworkId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.frameworkId"></a>

```typescript
public readonly frameworkId: string;
```

- *Type:* string

ID of the framework.

This is not the full name of the framework.
This is the last part of the full name of the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#framework_id CloudSecurityComplianceFramework#framework_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#location CloudSecurityComplianceFramework#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#organization CloudSecurityComplianceFramework#organization}

---

##### `cloudControlDetails`<sup>Optional</sup> <a name="cloudControlDetails" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.cloudControlDetails"></a>

```typescript
public readonly cloudControlDetails: IResolvable | CloudSecurityComplianceFrameworkCloudControlDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a>[]

cloud_control_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#cloud_control_details CloudSecurityComplianceFramework#cloud_control_details}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the framework. The maximum length is 2000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#description CloudSecurityComplianceFramework#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name of the framework. The maximum length is 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#display_name CloudSecurityComplianceFramework#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#id CloudSecurityComplianceFramework#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudSecurityComplianceFrameworkTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts">CloudSecurityComplianceFrameworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#timeouts CloudSecurityComplianceFramework#timeouts}

---

### CloudSecurityComplianceFrameworkTimeouts <a name="CloudSecurityComplianceFrameworkTimeouts" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts.Initializer"></a>

```typescript
import { cloudSecurityComplianceFramework } from '@cdktn/provider-google'

const cloudSecurityComplianceFrameworkTimeouts: cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#create CloudSecurityComplianceFramework#create}. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#delete CloudSecurityComplianceFramework#delete}. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#update CloudSecurityComplianceFramework#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#create CloudSecurityComplianceFramework#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#delete CloudSecurityComplianceFramework#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/cloud_security_compliance_framework#update CloudSecurityComplianceFramework#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudSecurityComplianceFrameworkCloudControlDetailsList <a name="CloudSecurityComplianceFrameworkCloudControlDetailsList" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer"></a>

```typescript
import { cloudSecurityComplianceFramework } from '@cdktn/provider-google'

new cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.get"></a>

```typescript
public get(index: number): CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudSecurityComplianceFrameworkCloudControlDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a>[]

---


### CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference <a name="CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer"></a>

```typescript
import { cloudSecurityComplianceFramework } from '@cdktn/provider-google'

new cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.putParameters"></a>

```typescript
public putParameters(value: IResolvable | CloudSecurityComplianceFrameworkCloudControlDetailsParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters">CloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>[]

---

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList">CloudSecurityComplianceFrameworkCloudControlDetailsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.majorRevisionIdInput">majorRevisionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.parametersInput">parametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters">CloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.majorRevisionId">majorRevisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: CloudSecurityComplianceFrameworkCloudControlDetailsParametersList;
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList">CloudSecurityComplianceFrameworkCloudControlDetailsParametersList</a>

---

##### `majorRevisionIdInput`<sup>Optional</sup> <a name="majorRevisionIdInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.majorRevisionIdInput"></a>

```typescript
public readonly majorRevisionIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | CloudSecurityComplianceFrameworkCloudControlDetailsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters">CloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>[]

---

##### `majorRevisionId`<sup>Required</sup> <a name="majorRevisionId" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.majorRevisionId"></a>

```typescript
public readonly majorRevisionId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudSecurityComplianceFrameworkCloudControlDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetails">CloudSecurityComplianceFrameworkCloudControlDetails</a>

---


### CloudSecurityComplianceFrameworkCloudControlDetailsParametersList <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersList" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer"></a>

```typescript
import { cloudSecurityComplianceFramework } from '@cdktn/provider-google'

new cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.get"></a>

```typescript
public get(index: number): CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters">CloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudSecurityComplianceFrameworkCloudControlDetailsParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters">CloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>[]

---


### CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer"></a>

```typescript
import { cloudSecurityComplianceFramework } from '@cdktn/provider-google'

new cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.putParameterValue">putParameterValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameterValue` <a name="putParameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.putParameterValue"></a>

```typescript
public putParameterValue(value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.putParameterValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.parameterValue">parameterValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.parameterValueInput">parameterValueInput</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters">CloudSecurityComplianceFrameworkCloudControlDetailsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.parameterValue"></a>

```typescript
public readonly parameterValue: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.parameterValueInput"></a>

```typescript
public readonly parameterValueInput: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue;
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudSecurityComplianceFrameworkCloudControlDetailsParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParameters">CloudSecurityComplianceFrameworkCloudControlDetailsParameters</a>

---


### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer"></a>

```typescript
import { cloudSecurityComplianceFramework } from '@cdktn/provider-google'

new cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue">putParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetParameterValue">resetParameterValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameterValue` <a name="putParameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue"></a>

```typescript
public putParameterValue(value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.putParameterValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

---

##### `resetName` <a name="resetName" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetParameterValue` <a name="resetParameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.resetParameterValue"></a>

```typescript
public resetParameterValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValue">parameterValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValueInput">parameterValueInput</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValue"></a>

```typescript
public readonly parameterValue: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.parameterValueInput"></a>

```typescript
public readonly parameterValueInput: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue;
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue;
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a>

---


### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer"></a>

```typescript
import { cloudSecurityComplianceFramework } from '@cdktn/provider-google'

new cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.putStringListValue">putStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetBoolValue">resetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetNumberValue">resetNumberValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringListValue">resetStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStringListValue` <a name="putStringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.putStringListValue"></a>

```typescript
public putStringListValue(value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.putStringListValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

---

##### `resetBoolValue` <a name="resetBoolValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetBoolValue"></a>

```typescript
public resetBoolValue(): void
```

##### `resetNumberValue` <a name="resetNumberValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetNumberValue"></a>

```typescript
public resetNumberValue(): void
```

##### `resetStringListValue` <a name="resetStringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringListValue"></a>

```typescript
public resetStringListValue(): void
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.resetStringValue"></a>

```typescript
public resetStringValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValue">stringListValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValueInput">boolValueInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValueInput">numberValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValueInput">stringListValueInput</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValue">boolValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValue">numberValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stringListValue`<sup>Required</sup> <a name="stringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValue"></a>

```typescript
public readonly stringListValue: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference</a>

---

##### `boolValueInput`<sup>Optional</sup> <a name="boolValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValueInput"></a>

```typescript
public readonly boolValueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `numberValueInput`<sup>Optional</sup> <a name="numberValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValueInput"></a>

```typescript
public readonly numberValueInput: number;
```

- *Type:* number

---

##### `stringListValueInput`<sup>Optional</sup> <a name="stringListValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringListValueInput"></a>

```typescript
public readonly stringListValueInput: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue;
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValueInput"></a>

```typescript
public readonly stringValueInput: string;
```

- *Type:* string

---

##### `boolValue`<sup>Required</sup> <a name="boolValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.boolValue"></a>

```typescript
public readonly boolValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `numberValue`<sup>Required</sup> <a name="numberValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.numberValue"></a>

```typescript
public readonly numberValue: number;
```

- *Type:* number

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue;
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValue</a>

---


### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer"></a>

```typescript
import { cloudSecurityComplianceFramework } from '@cdktn/provider-google'

new cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue;
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueParameterValueStringListValue</a>

---


### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.Initializer"></a>

```typescript
import { cloudSecurityComplianceFramework } from '@cdktn/provider-google'

new cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putOneofValue">putOneofValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putStringListValue">putStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetBoolValue">resetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetNumberValue">resetNumberValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetOneofValue">resetOneofValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetStringListValue">resetStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOneofValue` <a name="putOneofValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putOneofValue"></a>

```typescript
public putOneofValue(value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putOneofValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a>

---

##### `putStringListValue` <a name="putStringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putStringListValue"></a>

```typescript
public putStringListValue(value: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.putStringListValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a>

---

##### `resetBoolValue` <a name="resetBoolValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetBoolValue"></a>

```typescript
public resetBoolValue(): void
```

##### `resetNumberValue` <a name="resetNumberValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetNumberValue"></a>

```typescript
public resetNumberValue(): void
```

##### `resetOneofValue` <a name="resetOneofValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetOneofValue"></a>

```typescript
public resetOneofValue(): void
```

##### `resetStringListValue` <a name="resetStringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetStringListValue"></a>

```typescript
public resetStringListValue(): void
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.resetStringValue"></a>

```typescript
public resetStringValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.oneofValue">oneofValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringListValue">stringListValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.boolValueInput">boolValueInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.numberValueInput">numberValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.oneofValueInput">oneofValueInput</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringListValueInput">stringListValueInput</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.boolValue">boolValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.numberValue">numberValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `oneofValue`<sup>Required</sup> <a name="oneofValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.oneofValue"></a>

```typescript
public readonly oneofValue: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValueOutputReference</a>

---

##### `stringListValue`<sup>Required</sup> <a name="stringListValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringListValue"></a>

```typescript
public readonly stringListValue: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference</a>

---

##### `boolValueInput`<sup>Optional</sup> <a name="boolValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.boolValueInput"></a>

```typescript
public readonly boolValueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `numberValueInput`<sup>Optional</sup> <a name="numberValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.numberValueInput"></a>

```typescript
public readonly numberValueInput: number;
```

- *Type:* number

---

##### `oneofValueInput`<sup>Optional</sup> <a name="oneofValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.oneofValueInput"></a>

```typescript
public readonly oneofValueInput: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue;
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOneofValue</a>

---

##### `stringListValueInput`<sup>Optional</sup> <a name="stringListValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringListValueInput"></a>

```typescript
public readonly stringListValueInput: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue;
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a>

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringValueInput"></a>

```typescript
public readonly stringValueInput: string;
```

- *Type:* string

---

##### `boolValue`<sup>Required</sup> <a name="boolValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.boolValue"></a>

```typescript
public readonly boolValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `numberValue`<sup>Required</sup> <a name="numberValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.numberValue"></a>

```typescript
public readonly numberValue: number;
```

- *Type:* number

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue;
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValue</a>

---


### CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference <a name="CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer"></a>

```typescript
import { cloudSecurityComplianceFramework } from '@cdktn/provider-google'

new cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue;
```

- *Type:* <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue">CloudSecurityComplianceFrameworkCloudControlDetailsParametersParameterValueStringListValue</a>

---


### CloudSecurityComplianceFrameworkTimeoutsOutputReference <a name="CloudSecurityComplianceFrameworkTimeoutsOutputReference" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudSecurityComplianceFramework } from '@cdktn/provider-google'

new cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts">CloudSecurityComplianceFrameworkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudSecurityComplianceFrameworkTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudSecurityComplianceFramework.CloudSecurityComplianceFrameworkTimeouts">CloudSecurityComplianceFrameworkTimeouts</a>

---



