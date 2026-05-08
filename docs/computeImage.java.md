# `computeImage` Submodule <a name="`computeImage` Submodule" id="@cdktn/provider-google.computeImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeImage <a name="ComputeImage" id="@cdktn/provider-google.computeImage.ComputeImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image google_compute_image}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImage;

ComputeImage.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .diskSizeGb(java.lang.Number)
//  .family(java.lang.String)
//  .guestOsFeatures(IResolvable|java.util.List<ComputeImageGuestOsFeatures>)
//  .id(java.lang.String)
//  .imageEncryptionKey(ComputeImageImageEncryptionKey)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .licenses(java.util.List<java.lang.String>)
//  .params(ComputeImageParams)
//  .project(java.lang.String)
//  .rawDisk(ComputeImageRawDisk)
//  .shieldedInstanceInitialState(ComputeImageShieldedInstanceInitialState)
//  .sourceDisk(java.lang.String)
//  .sourceDiskEncryptionKey(ComputeImageSourceDiskEncryptionKey)
//  .sourceImage(java.lang.String)
//  .sourceImageEncryptionKey(ComputeImageSourceImageEncryptionKey)
//  .sourceSnapshot(java.lang.String)
//  .sourceSnapshotEncryptionKey(ComputeImageSourceSnapshotEncryptionKey)
//  .storageLocations(java.util.List<java.lang.String>)
//  .timeouts(ComputeImageTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource; |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | Size of the image when restored onto a persistent disk (in GB). |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.family">family</a></code> | <code>java.lang.String</code> | The name of the image family to which this image belongs. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.guestOsFeatures">guestOsFeatures</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeatures">ComputeImageGuestOsFeatures</a>></code> | guest_os_features block. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#id ComputeImage#id}. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.imageEncryptionKey">imageEncryptionKey</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a></code> | image_encryption_key block. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to apply to this Image. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.licenses">licenses</a></code> | <code>java.util.List<java.lang.String></code> | Any applicable license URI. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageParams">ComputeImageParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#project ComputeImage#project}. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.rawDisk">rawDisk</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a></code> | raw_disk block. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.shieldedInstanceInitialState">shieldedInstanceInitialState</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialState">ComputeImageShieldedInstanceInitialState</a></code> | shielded_instance_initial_state block. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.sourceDisk">sourceDisk</a></code> | <code>java.lang.String</code> | The source disk to create this image based on. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.sourceDiskEncryptionKey">sourceDiskEncryptionKey</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey">ComputeImageSourceDiskEncryptionKey</a></code> | source_disk_encryption_key block. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.sourceImage">sourceImage</a></code> | <code>java.lang.String</code> | URL of the source image used to create this image. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.sourceImageEncryptionKey">sourceImageEncryptionKey</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKey">ComputeImageSourceImageEncryptionKey</a></code> | source_image_encryption_key block. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.sourceSnapshot">sourceSnapshot</a></code> | <code>java.lang.String</code> | URL of the source snapshot used to create this image. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.sourceSnapshotEncryptionKey">sourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey">ComputeImageSourceSnapshotEncryptionKey</a></code> | source_snapshot_encryption_key block. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.storageLocations">storageLocations</a></code> | <code>java.util.List<java.lang.String></code> | Cloud Storage bucket storage location of the image (regional or multi-regional). Reference link: https://cloud.google.com/compute/docs/reference/rest/v1/images. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeouts">ComputeImageTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#name ComputeImage#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#description ComputeImage#description}

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.diskSizeGb"></a>

- *Type:* java.lang.Number

Size of the image when restored onto a persistent disk (in GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#disk_size_gb ComputeImage#disk_size_gb}

---

##### `family`<sup>Optional</sup> <a name="family" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.family"></a>

- *Type:* java.lang.String

The name of the image family to which this image belongs.

You can
create disks by specifying an image family instead of a specific
image name. The image family always returns its latest image that is
not deprecated. The name of the image family must comply with
RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#family ComputeImage#family}

---

##### `guestOsFeatures`<sup>Optional</sup> <a name="guestOsFeatures" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.guestOsFeatures"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeatures">ComputeImageGuestOsFeatures</a>>

guest_os_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#guest_os_features ComputeImage#guest_os_features}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#id ComputeImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageEncryptionKey`<sup>Optional</sup> <a name="imageEncryptionKey" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.imageEncryptionKey"></a>

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a>

image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#image_encryption_key ComputeImage#image_encryption_key}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to apply to this Image.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#labels ComputeImage#labels}

---

##### `licenses`<sup>Optional</sup> <a name="licenses" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.licenses"></a>

- *Type:* java.util.List<java.lang.String>

Any applicable license URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#licenses ComputeImage#licenses}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.params"></a>

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageParams">ComputeImageParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#params ComputeImage#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#project ComputeImage#project}.

---

##### `rawDisk`<sup>Optional</sup> <a name="rawDisk" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.rawDisk"></a>

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a>

raw_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#raw_disk ComputeImage#raw_disk}

---

##### `shieldedInstanceInitialState`<sup>Optional</sup> <a name="shieldedInstanceInitialState" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.shieldedInstanceInitialState"></a>

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialState">ComputeImageShieldedInstanceInitialState</a>

shielded_instance_initial_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#shielded_instance_initial_state ComputeImage#shielded_instance_initial_state}

---

##### `sourceDisk`<sup>Optional</sup> <a name="sourceDisk" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.sourceDisk"></a>

- *Type:* java.lang.String

The source disk to create this image based on.

You must provide either this property or the
rawDisk.source property but not both to create an image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#source_disk ComputeImage#source_disk}

---

##### `sourceDiskEncryptionKey`<sup>Optional</sup> <a name="sourceDiskEncryptionKey" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.sourceDiskEncryptionKey"></a>

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey">ComputeImageSourceDiskEncryptionKey</a>

source_disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#source_disk_encryption_key ComputeImage#source_disk_encryption_key}

---

##### `sourceImage`<sup>Optional</sup> <a name="sourceImage" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.sourceImage"></a>

- *Type:* java.lang.String

URL of the source image used to create this image.

In order to create an image, you must provide the full or partial
URL of one of the following:

* The selfLink URL
* This property
* The rawDisk.source URL
* The sourceDisk URL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#source_image ComputeImage#source_image}

---

##### `sourceImageEncryptionKey`<sup>Optional</sup> <a name="sourceImageEncryptionKey" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.sourceImageEncryptionKey"></a>

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKey">ComputeImageSourceImageEncryptionKey</a>

source_image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#source_image_encryption_key ComputeImage#source_image_encryption_key}

---

##### `sourceSnapshot`<sup>Optional</sup> <a name="sourceSnapshot" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.sourceSnapshot"></a>

- *Type:* java.lang.String

URL of the source snapshot used to create this image.

In order to create an image, you must provide the full or partial URL of one of the following:

* The selfLink URL
* This property
* The sourceImage URL
* The rawDisk.source URL
* The sourceDisk URL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#source_snapshot ComputeImage#source_snapshot}

---

##### `sourceSnapshotEncryptionKey`<sup>Optional</sup> <a name="sourceSnapshotEncryptionKey" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.sourceSnapshotEncryptionKey"></a>

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey">ComputeImageSourceSnapshotEncryptionKey</a>

source_snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#source_snapshot_encryption_key ComputeImage#source_snapshot_encryption_key}

---

##### `storageLocations`<sup>Optional</sup> <a name="storageLocations" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.storageLocations"></a>

- *Type:* java.util.List<java.lang.String>

Cloud Storage bucket storage location of the image (regional or multi-regional). Reference link: https://cloud.google.com/compute/docs/reference/rest/v1/images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#storage_locations ComputeImage#storage_locations}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeImage.ComputeImage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageTimeouts">ComputeImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#timeouts ComputeImage#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.putGuestOsFeatures">putGuestOsFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.putImageEncryptionKey">putImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.putParams">putParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.putRawDisk">putRawDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.putShieldedInstanceInitialState">putShieldedInstanceInitialState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.putSourceDiskEncryptionKey">putSourceDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.putSourceImageEncryptionKey">putSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.putSourceSnapshotEncryptionKey">putSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.resetFamily">resetFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.resetGuestOsFeatures">resetGuestOsFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.resetImageEncryptionKey">resetImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.resetLicenses">resetLicenses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.resetParams">resetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.resetRawDisk">resetRawDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.resetShieldedInstanceInitialState">resetShieldedInstanceInitialState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.resetSourceDisk">resetSourceDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.resetSourceDiskEncryptionKey">resetSourceDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.resetSourceImage">resetSourceImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.resetSourceImageEncryptionKey">resetSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.resetSourceSnapshot">resetSourceSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.resetSourceSnapshotEncryptionKey">resetSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.resetStorageLocations">resetStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeImage.ComputeImage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeImage.ComputeImage.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeImage.ComputeImage.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeImage.ComputeImage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeImage.ComputeImage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeImage.ComputeImage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeImage.ComputeImage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeImage.ComputeImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeImage.ComputeImage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeImage.ComputeImage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeImage.ComputeImage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeImage.ComputeImage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeImage.ComputeImage.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeImage.ComputeImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeImage.ComputeImage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeImage.ComputeImage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeImage.ComputeImage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeImage.ComputeImage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeImage.ComputeImage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeImage.ComputeImage.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeImage.ComputeImage.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeImage.ComputeImage.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeImage.ComputeImage.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeImage.ComputeImage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeImage.ComputeImage.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeImage.ComputeImage.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeImage.ComputeImage.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeImage.ComputeImage.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeImage.ComputeImage.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeImage.ComputeImage.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeImage.ComputeImage.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGuestOsFeatures` <a name="putGuestOsFeatures" id="@cdktn/provider-google.computeImage.ComputeImage.putGuestOsFeatures"></a>

```java
public void putGuestOsFeatures(IResolvable|java.util.List<ComputeImageGuestOsFeatures> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeImage.ComputeImage.putGuestOsFeatures.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeatures">ComputeImageGuestOsFeatures</a>>

---

##### `putImageEncryptionKey` <a name="putImageEncryptionKey" id="@cdktn/provider-google.computeImage.ComputeImage.putImageEncryptionKey"></a>

```java
public void putImageEncryptionKey(ComputeImageImageEncryptionKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeImage.ComputeImage.putImageEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a>

---

##### `putParams` <a name="putParams" id="@cdktn/provider-google.computeImage.ComputeImage.putParams"></a>

```java
public void putParams(ComputeImageParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeImage.ComputeImage.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageParams">ComputeImageParams</a>

---

##### `putRawDisk` <a name="putRawDisk" id="@cdktn/provider-google.computeImage.ComputeImage.putRawDisk"></a>

```java
public void putRawDisk(ComputeImageRawDisk value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeImage.ComputeImage.putRawDisk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a>

---

##### `putShieldedInstanceInitialState` <a name="putShieldedInstanceInitialState" id="@cdktn/provider-google.computeImage.ComputeImage.putShieldedInstanceInitialState"></a>

```java
public void putShieldedInstanceInitialState(ComputeImageShieldedInstanceInitialState value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeImage.ComputeImage.putShieldedInstanceInitialState.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialState">ComputeImageShieldedInstanceInitialState</a>

---

##### `putSourceDiskEncryptionKey` <a name="putSourceDiskEncryptionKey" id="@cdktn/provider-google.computeImage.ComputeImage.putSourceDiskEncryptionKey"></a>

```java
public void putSourceDiskEncryptionKey(ComputeImageSourceDiskEncryptionKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeImage.ComputeImage.putSourceDiskEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey">ComputeImageSourceDiskEncryptionKey</a>

---

##### `putSourceImageEncryptionKey` <a name="putSourceImageEncryptionKey" id="@cdktn/provider-google.computeImage.ComputeImage.putSourceImageEncryptionKey"></a>

```java
public void putSourceImageEncryptionKey(ComputeImageSourceImageEncryptionKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeImage.ComputeImage.putSourceImageEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKey">ComputeImageSourceImageEncryptionKey</a>

---

##### `putSourceSnapshotEncryptionKey` <a name="putSourceSnapshotEncryptionKey" id="@cdktn/provider-google.computeImage.ComputeImage.putSourceSnapshotEncryptionKey"></a>

```java
public void putSourceSnapshotEncryptionKey(ComputeImageSourceSnapshotEncryptionKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeImage.ComputeImage.putSourceSnapshotEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey">ComputeImageSourceSnapshotEncryptionKey</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeImage.ComputeImage.putTimeouts"></a>

```java
public void putTimeouts(ComputeImageTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeImage.ComputeImage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageTimeouts">ComputeImageTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeImage.ComputeImage.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktn/provider-google.computeImage.ComputeImage.resetDiskSizeGb"></a>

```java
public void resetDiskSizeGb()
```

##### `resetFamily` <a name="resetFamily" id="@cdktn/provider-google.computeImage.ComputeImage.resetFamily"></a>

```java
public void resetFamily()
```

##### `resetGuestOsFeatures` <a name="resetGuestOsFeatures" id="@cdktn/provider-google.computeImage.ComputeImage.resetGuestOsFeatures"></a>

```java
public void resetGuestOsFeatures()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.computeImage.ComputeImage.resetId"></a>

```java
public void resetId()
```

##### `resetImageEncryptionKey` <a name="resetImageEncryptionKey" id="@cdktn/provider-google.computeImage.ComputeImage.resetImageEncryptionKey"></a>

```java
public void resetImageEncryptionKey()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.computeImage.ComputeImage.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLicenses` <a name="resetLicenses" id="@cdktn/provider-google.computeImage.ComputeImage.resetLicenses"></a>

```java
public void resetLicenses()
```

##### `resetParams` <a name="resetParams" id="@cdktn/provider-google.computeImage.ComputeImage.resetParams"></a>

```java
public void resetParams()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeImage.ComputeImage.resetProject"></a>

```java
public void resetProject()
```

##### `resetRawDisk` <a name="resetRawDisk" id="@cdktn/provider-google.computeImage.ComputeImage.resetRawDisk"></a>

```java
public void resetRawDisk()
```

##### `resetShieldedInstanceInitialState` <a name="resetShieldedInstanceInitialState" id="@cdktn/provider-google.computeImage.ComputeImage.resetShieldedInstanceInitialState"></a>

```java
public void resetShieldedInstanceInitialState()
```

##### `resetSourceDisk` <a name="resetSourceDisk" id="@cdktn/provider-google.computeImage.ComputeImage.resetSourceDisk"></a>

```java
public void resetSourceDisk()
```

##### `resetSourceDiskEncryptionKey` <a name="resetSourceDiskEncryptionKey" id="@cdktn/provider-google.computeImage.ComputeImage.resetSourceDiskEncryptionKey"></a>

```java
public void resetSourceDiskEncryptionKey()
```

##### `resetSourceImage` <a name="resetSourceImage" id="@cdktn/provider-google.computeImage.ComputeImage.resetSourceImage"></a>

```java
public void resetSourceImage()
```

##### `resetSourceImageEncryptionKey` <a name="resetSourceImageEncryptionKey" id="@cdktn/provider-google.computeImage.ComputeImage.resetSourceImageEncryptionKey"></a>

```java
public void resetSourceImageEncryptionKey()
```

##### `resetSourceSnapshot` <a name="resetSourceSnapshot" id="@cdktn/provider-google.computeImage.ComputeImage.resetSourceSnapshot"></a>

```java
public void resetSourceSnapshot()
```

##### `resetSourceSnapshotEncryptionKey` <a name="resetSourceSnapshotEncryptionKey" id="@cdktn/provider-google.computeImage.ComputeImage.resetSourceSnapshotEncryptionKey"></a>

```java
public void resetSourceSnapshotEncryptionKey()
```

##### `resetStorageLocations` <a name="resetStorageLocations" id="@cdktn/provider-google.computeImage.ComputeImage.resetStorageLocations"></a>

```java
public void resetStorageLocations()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeImage.ComputeImage.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeImage resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeImage.ComputeImage.isConstruct"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImage;

ComputeImage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeImage.ComputeImage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeImage.ComputeImage.isTerraformElement"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImage;

ComputeImage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeImage.ComputeImage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeImage.ComputeImage.isTerraformResource"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImage;

ComputeImage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeImage.ComputeImage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeImage.ComputeImage.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImage;

ComputeImage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeImage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ComputeImage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeImage.ComputeImage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeImage.ComputeImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeImage.ComputeImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeImage.ComputeImage.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ComputeImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.archiveSizeBytes">archiveSizeBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.guestOsFeatures">guestOsFeatures</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList">ComputeImageGuestOsFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.imageEncryptionKey">imageEncryptionKey</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference">ComputeImageImageEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.labelFingerprint">labelFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference">ComputeImageParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.rawDisk">rawDisk</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference">ComputeImageRawDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.shieldedInstanceInitialState">shieldedInstanceInitialState</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference">ComputeImageShieldedInstanceInitialStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.sourceDiskEncryptionKey">sourceDiskEncryptionKey</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference">ComputeImageSourceDiskEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.sourceImageEncryptionKey">sourceImageEncryptionKey</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference">ComputeImageSourceImageEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.sourceSnapshotEncryptionKey">sourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference">ComputeImageSourceSnapshotEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference">ComputeImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.familyInput">familyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.guestOsFeaturesInput">guestOsFeaturesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeatures">ComputeImageGuestOsFeatures</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.imageEncryptionKeyInput">imageEncryptionKeyInput</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.licensesInput">licensesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.paramsInput">paramsInput</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageParams">ComputeImageParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.rawDiskInput">rawDiskInput</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.shieldedInstanceInitialStateInput">shieldedInstanceInitialStateInput</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialState">ComputeImageShieldedInstanceInitialState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.sourceDiskEncryptionKeyInput">sourceDiskEncryptionKeyInput</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey">ComputeImageSourceDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.sourceDiskInput">sourceDiskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.sourceImageEncryptionKeyInput">sourceImageEncryptionKeyInput</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKey">ComputeImageSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.sourceImageInput">sourceImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.sourceSnapshotEncryptionKeyInput">sourceSnapshotEncryptionKeyInput</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey">ComputeImageSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.sourceSnapshotInput">sourceSnapshotInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.storageLocationsInput">storageLocationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeImage.ComputeImageTimeouts">ComputeImageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.family">family</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.licenses">licenses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.sourceDisk">sourceDisk</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.sourceImage">sourceImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.sourceSnapshot">sourceSnapshot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.storageLocations">storageLocations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeImage.ComputeImage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeImage.ComputeImage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeImage.ComputeImage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeImage.ComputeImage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeImage.ComputeImage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeImage.ComputeImage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeImage.ComputeImage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeImage.ComputeImage.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeImage.ComputeImage.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeImage.ComputeImage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeImage.ComputeImage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeImage.ComputeImage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeImage.ComputeImage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeImage.ComputeImage.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `archiveSizeBytes`<sup>Required</sup> <a name="archiveSizeBytes" id="@cdktn/provider-google.computeImage.ComputeImage.property.archiveSizeBytes"></a>

```java
public java.lang.Number getArchiveSizeBytes();
```

- *Type:* java.lang.Number

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google.computeImage.ComputeImage.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.computeImage.ComputeImage.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `guestOsFeatures`<sup>Required</sup> <a name="guestOsFeatures" id="@cdktn/provider-google.computeImage.ComputeImage.property.guestOsFeatures"></a>

```java
public ComputeImageGuestOsFeaturesList getGuestOsFeatures();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList">ComputeImageGuestOsFeaturesList</a>

---

##### `imageEncryptionKey`<sup>Required</sup> <a name="imageEncryptionKey" id="@cdktn/provider-google.computeImage.ComputeImage.property.imageEncryptionKey"></a>

```java
public ComputeImageImageEncryptionKeyOutputReference getImageEncryptionKey();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference">ComputeImageImageEncryptionKeyOutputReference</a>

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktn/provider-google.computeImage.ComputeImage.property.labelFingerprint"></a>

```java
public java.lang.String getLabelFingerprint();
```

- *Type:* java.lang.String

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google.computeImage.ComputeImage.property.params"></a>

```java
public ComputeImageParamsOutputReference getParams();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference">ComputeImageParamsOutputReference</a>

---

##### `rawDisk`<sup>Required</sup> <a name="rawDisk" id="@cdktn/provider-google.computeImage.ComputeImage.property.rawDisk"></a>

```java
public ComputeImageRawDiskOutputReference getRawDisk();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference">ComputeImageRawDiskOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.computeImage.ComputeImage.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `shieldedInstanceInitialState`<sup>Required</sup> <a name="shieldedInstanceInitialState" id="@cdktn/provider-google.computeImage.ComputeImage.property.shieldedInstanceInitialState"></a>

```java
public ComputeImageShieldedInstanceInitialStateOutputReference getShieldedInstanceInitialState();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference">ComputeImageShieldedInstanceInitialStateOutputReference</a>

---

##### `sourceDiskEncryptionKey`<sup>Required</sup> <a name="sourceDiskEncryptionKey" id="@cdktn/provider-google.computeImage.ComputeImage.property.sourceDiskEncryptionKey"></a>

```java
public ComputeImageSourceDiskEncryptionKeyOutputReference getSourceDiskEncryptionKey();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference">ComputeImageSourceDiskEncryptionKeyOutputReference</a>

---

##### `sourceImageEncryptionKey`<sup>Required</sup> <a name="sourceImageEncryptionKey" id="@cdktn/provider-google.computeImage.ComputeImage.property.sourceImageEncryptionKey"></a>

```java
public ComputeImageSourceImageEncryptionKeyOutputReference getSourceImageEncryptionKey();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference">ComputeImageSourceImageEncryptionKeyOutputReference</a>

---

##### `sourceSnapshotEncryptionKey`<sup>Required</sup> <a name="sourceSnapshotEncryptionKey" id="@cdktn/provider-google.computeImage.ComputeImage.property.sourceSnapshotEncryptionKey"></a>

```java
public ComputeImageSourceSnapshotEncryptionKeyOutputReference getSourceSnapshotEncryptionKey();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference">ComputeImageSourceSnapshotEncryptionKeyOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.computeImage.ComputeImage.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeImage.ComputeImage.property.timeouts"></a>

```java
public ComputeImageTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference">ComputeImageTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeImage.ComputeImage.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktn/provider-google.computeImage.ComputeImage.property.diskSizeGbInput"></a>

```java
public java.lang.Number getDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `familyInput`<sup>Optional</sup> <a name="familyInput" id="@cdktn/provider-google.computeImage.ComputeImage.property.familyInput"></a>

```java
public java.lang.String getFamilyInput();
```

- *Type:* java.lang.String

---

##### `guestOsFeaturesInput`<sup>Optional</sup> <a name="guestOsFeaturesInput" id="@cdktn/provider-google.computeImage.ComputeImage.property.guestOsFeaturesInput"></a>

```java
public IResolvable|java.util.List<ComputeImageGuestOsFeatures> getGuestOsFeaturesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeatures">ComputeImageGuestOsFeatures</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computeImage.ComputeImage.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageEncryptionKeyInput`<sup>Optional</sup> <a name="imageEncryptionKeyInput" id="@cdktn/provider-google.computeImage.ComputeImage.property.imageEncryptionKeyInput"></a>

```java
public ComputeImageImageEncryptionKey getImageEncryptionKeyInput();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.computeImage.ComputeImage.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `licensesInput`<sup>Optional</sup> <a name="licensesInput" id="@cdktn/provider-google.computeImage.ComputeImage.property.licensesInput"></a>

```java
public java.util.List<java.lang.String> getLicensesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeImage.ComputeImage.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktn/provider-google.computeImage.ComputeImage.property.paramsInput"></a>

```java
public ComputeImageParams getParamsInput();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageParams">ComputeImageParams</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeImage.ComputeImage.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `rawDiskInput`<sup>Optional</sup> <a name="rawDiskInput" id="@cdktn/provider-google.computeImage.ComputeImage.property.rawDiskInput"></a>

```java
public ComputeImageRawDisk getRawDiskInput();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a>

---

##### `shieldedInstanceInitialStateInput`<sup>Optional</sup> <a name="shieldedInstanceInitialStateInput" id="@cdktn/provider-google.computeImage.ComputeImage.property.shieldedInstanceInitialStateInput"></a>

```java
public ComputeImageShieldedInstanceInitialState getShieldedInstanceInitialStateInput();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialState">ComputeImageShieldedInstanceInitialState</a>

---

##### `sourceDiskEncryptionKeyInput`<sup>Optional</sup> <a name="sourceDiskEncryptionKeyInput" id="@cdktn/provider-google.computeImage.ComputeImage.property.sourceDiskEncryptionKeyInput"></a>

```java
public ComputeImageSourceDiskEncryptionKey getSourceDiskEncryptionKeyInput();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey">ComputeImageSourceDiskEncryptionKey</a>

---

##### `sourceDiskInput`<sup>Optional</sup> <a name="sourceDiskInput" id="@cdktn/provider-google.computeImage.ComputeImage.property.sourceDiskInput"></a>

```java
public java.lang.String getSourceDiskInput();
```

- *Type:* java.lang.String

---

##### `sourceImageEncryptionKeyInput`<sup>Optional</sup> <a name="sourceImageEncryptionKeyInput" id="@cdktn/provider-google.computeImage.ComputeImage.property.sourceImageEncryptionKeyInput"></a>

```java
public ComputeImageSourceImageEncryptionKey getSourceImageEncryptionKeyInput();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKey">ComputeImageSourceImageEncryptionKey</a>

---

##### `sourceImageInput`<sup>Optional</sup> <a name="sourceImageInput" id="@cdktn/provider-google.computeImage.ComputeImage.property.sourceImageInput"></a>

```java
public java.lang.String getSourceImageInput();
```

- *Type:* java.lang.String

---

##### `sourceSnapshotEncryptionKeyInput`<sup>Optional</sup> <a name="sourceSnapshotEncryptionKeyInput" id="@cdktn/provider-google.computeImage.ComputeImage.property.sourceSnapshotEncryptionKeyInput"></a>

```java
public ComputeImageSourceSnapshotEncryptionKey getSourceSnapshotEncryptionKeyInput();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey">ComputeImageSourceSnapshotEncryptionKey</a>

---

##### `sourceSnapshotInput`<sup>Optional</sup> <a name="sourceSnapshotInput" id="@cdktn/provider-google.computeImage.ComputeImage.property.sourceSnapshotInput"></a>

```java
public java.lang.String getSourceSnapshotInput();
```

- *Type:* java.lang.String

---

##### `storageLocationsInput`<sup>Optional</sup> <a name="storageLocationsInput" id="@cdktn/provider-google.computeImage.ComputeImage.property.storageLocationsInput"></a>

```java
public java.util.List<java.lang.String> getStorageLocationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeImage.ComputeImage.property.timeoutsInput"></a>

```java
public IResolvable|ComputeImageTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeImage.ComputeImageTimeouts">ComputeImageTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeImage.ComputeImage.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktn/provider-google.computeImage.ComputeImage.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktn/provider-google.computeImage.ComputeImage.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeImage.ComputeImage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.computeImage.ComputeImage.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `licenses`<sup>Required</sup> <a name="licenses" id="@cdktn/provider-google.computeImage.ComputeImage.property.licenses"></a>

```java
public java.util.List<java.lang.String> getLicenses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeImage.ComputeImage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeImage.ComputeImage.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `sourceDisk`<sup>Required</sup> <a name="sourceDisk" id="@cdktn/provider-google.computeImage.ComputeImage.property.sourceDisk"></a>

```java
public java.lang.String getSourceDisk();
```

- *Type:* java.lang.String

---

##### `sourceImage`<sup>Required</sup> <a name="sourceImage" id="@cdktn/provider-google.computeImage.ComputeImage.property.sourceImage"></a>

```java
public java.lang.String getSourceImage();
```

- *Type:* java.lang.String

---

##### `sourceSnapshot`<sup>Required</sup> <a name="sourceSnapshot" id="@cdktn/provider-google.computeImage.ComputeImage.property.sourceSnapshot"></a>

```java
public java.lang.String getSourceSnapshot();
```

- *Type:* java.lang.String

---

##### `storageLocations`<sup>Required</sup> <a name="storageLocations" id="@cdktn/provider-google.computeImage.ComputeImage.property.storageLocations"></a>

```java
public java.util.List<java.lang.String> getStorageLocations();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeImage.ComputeImage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeImageConfig <a name="ComputeImageConfig" id="@cdktn/provider-google.computeImage.ComputeImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeImage.ComputeImageConfig.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageConfig;

ComputeImageConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .diskSizeGb(java.lang.Number)
//  .family(java.lang.String)
//  .guestOsFeatures(IResolvable|java.util.List<ComputeImageGuestOsFeatures>)
//  .id(java.lang.String)
//  .imageEncryptionKey(ComputeImageImageEncryptionKey)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .licenses(java.util.List<java.lang.String>)
//  .params(ComputeImageParams)
//  .project(java.lang.String)
//  .rawDisk(ComputeImageRawDisk)
//  .shieldedInstanceInitialState(ComputeImageShieldedInstanceInitialState)
//  .sourceDisk(java.lang.String)
//  .sourceDiskEncryptionKey(ComputeImageSourceDiskEncryptionKey)
//  .sourceImage(java.lang.String)
//  .sourceImageEncryptionKey(ComputeImageSourceImageEncryptionKey)
//  .sourceSnapshot(java.lang.String)
//  .sourceSnapshotEncryptionKey(ComputeImageSourceSnapshotEncryptionKey)
//  .storageLocations(java.util.List<java.lang.String>)
//  .timeouts(ComputeImageTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource; |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageConfig.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | Size of the image when restored onto a persistent disk (in GB). |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageConfig.property.family">family</a></code> | <code>java.lang.String</code> | The name of the image family to which this image belongs. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageConfig.property.guestOsFeatures">guestOsFeatures</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeatures">ComputeImageGuestOsFeatures</a>></code> | guest_os_features block. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#id ComputeImage#id}. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageConfig.property.imageEncryptionKey">imageEncryptionKey</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a></code> | image_encryption_key block. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to apply to this Image. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageConfig.property.licenses">licenses</a></code> | <code>java.util.List<java.lang.String></code> | Any applicable license URI. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageConfig.property.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageParams">ComputeImageParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#project ComputeImage#project}. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageConfig.property.rawDisk">rawDisk</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a></code> | raw_disk block. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageConfig.property.shieldedInstanceInitialState">shieldedInstanceInitialState</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialState">ComputeImageShieldedInstanceInitialState</a></code> | shielded_instance_initial_state block. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageConfig.property.sourceDisk">sourceDisk</a></code> | <code>java.lang.String</code> | The source disk to create this image based on. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageConfig.property.sourceDiskEncryptionKey">sourceDiskEncryptionKey</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey">ComputeImageSourceDiskEncryptionKey</a></code> | source_disk_encryption_key block. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageConfig.property.sourceImage">sourceImage</a></code> | <code>java.lang.String</code> | URL of the source image used to create this image. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageConfig.property.sourceImageEncryptionKey">sourceImageEncryptionKey</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKey">ComputeImageSourceImageEncryptionKey</a></code> | source_image_encryption_key block. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageConfig.property.sourceSnapshot">sourceSnapshot</a></code> | <code>java.lang.String</code> | URL of the source snapshot used to create this image. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageConfig.property.sourceSnapshotEncryptionKey">sourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey">ComputeImageSourceSnapshotEncryptionKey</a></code> | source_snapshot_encryption_key block. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageConfig.property.storageLocations">storageLocations</a></code> | <code>java.util.List<java.lang.String></code> | Cloud Storage bucket storage location of the image (regional or multi-regional). Reference link: https://cloud.google.com/compute/docs/reference/rest/v1/images. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeouts">ComputeImageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeImage.ComputeImageConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeImage.ComputeImageConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeImage.ComputeImageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeImage.ComputeImageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeImage.ComputeImageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeImage.ComputeImageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeImage.ComputeImageConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeImage.ComputeImageConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#name ComputeImage#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeImage.ComputeImageConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#description ComputeImage#description}

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktn/provider-google.computeImage.ComputeImageConfig.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

Size of the image when restored onto a persistent disk (in GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#disk_size_gb ComputeImage#disk_size_gb}

---

##### `family`<sup>Optional</sup> <a name="family" id="@cdktn/provider-google.computeImage.ComputeImageConfig.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

The name of the image family to which this image belongs.

You can
create disks by specifying an image family instead of a specific
image name. The image family always returns its latest image that is
not deprecated. The name of the image family must comply with
RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#family ComputeImage#family}

---

##### `guestOsFeatures`<sup>Optional</sup> <a name="guestOsFeatures" id="@cdktn/provider-google.computeImage.ComputeImageConfig.property.guestOsFeatures"></a>

```java
public IResolvable|java.util.List<ComputeImageGuestOsFeatures> getGuestOsFeatures();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeatures">ComputeImageGuestOsFeatures</a>>

guest_os_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#guest_os_features ComputeImage#guest_os_features}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeImage.ComputeImageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#id ComputeImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageEncryptionKey`<sup>Optional</sup> <a name="imageEncryptionKey" id="@cdktn/provider-google.computeImage.ComputeImageConfig.property.imageEncryptionKey"></a>

```java
public ComputeImageImageEncryptionKey getImageEncryptionKey();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a>

image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#image_encryption_key ComputeImage#image_encryption_key}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.computeImage.ComputeImageConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to apply to this Image.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#labels ComputeImage#labels}

---

##### `licenses`<sup>Optional</sup> <a name="licenses" id="@cdktn/provider-google.computeImage.ComputeImageConfig.property.licenses"></a>

```java
public java.util.List<java.lang.String> getLicenses();
```

- *Type:* java.util.List<java.lang.String>

Any applicable license URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#licenses ComputeImage#licenses}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.computeImage.ComputeImageConfig.property.params"></a>

```java
public ComputeImageParams getParams();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageParams">ComputeImageParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#params ComputeImage#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeImage.ComputeImageConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#project ComputeImage#project}.

---

##### `rawDisk`<sup>Optional</sup> <a name="rawDisk" id="@cdktn/provider-google.computeImage.ComputeImageConfig.property.rawDisk"></a>

```java
public ComputeImageRawDisk getRawDisk();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a>

raw_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#raw_disk ComputeImage#raw_disk}

---

##### `shieldedInstanceInitialState`<sup>Optional</sup> <a name="shieldedInstanceInitialState" id="@cdktn/provider-google.computeImage.ComputeImageConfig.property.shieldedInstanceInitialState"></a>

```java
public ComputeImageShieldedInstanceInitialState getShieldedInstanceInitialState();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialState">ComputeImageShieldedInstanceInitialState</a>

shielded_instance_initial_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#shielded_instance_initial_state ComputeImage#shielded_instance_initial_state}

---

##### `sourceDisk`<sup>Optional</sup> <a name="sourceDisk" id="@cdktn/provider-google.computeImage.ComputeImageConfig.property.sourceDisk"></a>

```java
public java.lang.String getSourceDisk();
```

- *Type:* java.lang.String

The source disk to create this image based on.

You must provide either this property or the
rawDisk.source property but not both to create an image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#source_disk ComputeImage#source_disk}

---

##### `sourceDiskEncryptionKey`<sup>Optional</sup> <a name="sourceDiskEncryptionKey" id="@cdktn/provider-google.computeImage.ComputeImageConfig.property.sourceDiskEncryptionKey"></a>

```java
public ComputeImageSourceDiskEncryptionKey getSourceDiskEncryptionKey();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey">ComputeImageSourceDiskEncryptionKey</a>

source_disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#source_disk_encryption_key ComputeImage#source_disk_encryption_key}

---

##### `sourceImage`<sup>Optional</sup> <a name="sourceImage" id="@cdktn/provider-google.computeImage.ComputeImageConfig.property.sourceImage"></a>

```java
public java.lang.String getSourceImage();
```

- *Type:* java.lang.String

URL of the source image used to create this image.

In order to create an image, you must provide the full or partial
URL of one of the following:

* The selfLink URL
* This property
* The rawDisk.source URL
* The sourceDisk URL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#source_image ComputeImage#source_image}

---

##### `sourceImageEncryptionKey`<sup>Optional</sup> <a name="sourceImageEncryptionKey" id="@cdktn/provider-google.computeImage.ComputeImageConfig.property.sourceImageEncryptionKey"></a>

```java
public ComputeImageSourceImageEncryptionKey getSourceImageEncryptionKey();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKey">ComputeImageSourceImageEncryptionKey</a>

source_image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#source_image_encryption_key ComputeImage#source_image_encryption_key}

---

##### `sourceSnapshot`<sup>Optional</sup> <a name="sourceSnapshot" id="@cdktn/provider-google.computeImage.ComputeImageConfig.property.sourceSnapshot"></a>

```java
public java.lang.String getSourceSnapshot();
```

- *Type:* java.lang.String

URL of the source snapshot used to create this image.

In order to create an image, you must provide the full or partial URL of one of the following:

* The selfLink URL
* This property
* The sourceImage URL
* The rawDisk.source URL
* The sourceDisk URL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#source_snapshot ComputeImage#source_snapshot}

---

##### `sourceSnapshotEncryptionKey`<sup>Optional</sup> <a name="sourceSnapshotEncryptionKey" id="@cdktn/provider-google.computeImage.ComputeImageConfig.property.sourceSnapshotEncryptionKey"></a>

```java
public ComputeImageSourceSnapshotEncryptionKey getSourceSnapshotEncryptionKey();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey">ComputeImageSourceSnapshotEncryptionKey</a>

source_snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#source_snapshot_encryption_key ComputeImage#source_snapshot_encryption_key}

---

##### `storageLocations`<sup>Optional</sup> <a name="storageLocations" id="@cdktn/provider-google.computeImage.ComputeImageConfig.property.storageLocations"></a>

```java
public java.util.List<java.lang.String> getStorageLocations();
```

- *Type:* java.util.List<java.lang.String>

Cloud Storage bucket storage location of the image (regional or multi-regional). Reference link: https://cloud.google.com/compute/docs/reference/rest/v1/images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#storage_locations ComputeImage#storage_locations}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeImage.ComputeImageConfig.property.timeouts"></a>

```java
public ComputeImageTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageTimeouts">ComputeImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#timeouts ComputeImage#timeouts}

---

### ComputeImageGuestOsFeatures <a name="ComputeImageGuestOsFeatures" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeatures.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageGuestOsFeatures;

ComputeImageGuestOsFeatures.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeatures.property.type">type</a></code> | <code>java.lang.String</code> | The type of supported feature. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeatures.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of supported feature.

Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options. Possible values: ["MULTI_IP_SUBNET", "SECURE_BOOT", "SEV_CAPABLE", "UEFI_COMPATIBLE", "VIRTIO_SCSI_MULTIQUEUE", "WINDOWS", "GVNIC", "IDPF", "SEV_LIVE_MIGRATABLE", "SEV_SNP_CAPABLE", "SUSPEND_RESUME_COMPATIBLE", "TDX_CAPABLE", "SEV_LIVE_MIGRATABLE_V2", "SNP_SVSM_CAPABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#type ComputeImage#type}

---

### ComputeImageImageEncryptionKey <a name="ComputeImageImageEncryptionKey" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKey.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageImageEncryptionKey;

ComputeImageImageEncryptionKey.builder()
//  .kmsKeySelfLink(java.lang.String)
//  .kmsKeyServiceAccount(java.lang.String)
//  .rawKey(java.lang.String)
//  .rsaEncryptedKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKey.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | The self link of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKey.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | The service account being used for the encryption request for the given KMS key. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKey.property.rawKey">rawKey</a></code> | <code>java.lang.String</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKey.property.rsaEncryptedKey">rsaEncryptedKey</a></code> | <code>java.lang.String</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |

---

##### `kmsKeySelfLink`<sup>Optional</sup> <a name="kmsKeySelfLink" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKey.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#kms_key_self_link ComputeImage#kms_key_self_link}

---

##### `kmsKeyServiceAccount`<sup>Optional</sup> <a name="kmsKeyServiceAccount" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKey.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

The service account being used for the encryption request for the given KMS key.

If absent, the Compute Engine default service
account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#kms_key_service_account ComputeImage#kms_key_service_account}

---

##### `rawKey`<sup>Optional</sup> <a name="rawKey" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKey.property.rawKey"></a>

```java
public java.lang.String getRawKey();
```

- *Type:* java.lang.String

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#raw_key ComputeImage#raw_key}

---

##### `rsaEncryptedKey`<sup>Optional</sup> <a name="rsaEncryptedKey" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKey.property.rsaEncryptedKey"></a>

```java
public java.lang.String getRsaEncryptedKey();
```

- *Type:* java.lang.String

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#rsa_encrypted_key ComputeImage#rsa_encrypted_key}

---

### ComputeImageParams <a name="ComputeImageParams" id="@cdktn/provider-google.computeImage.ComputeImageParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeImage.ComputeImageParams.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageParams;

ComputeImageParams.builder()
//  .resourceManagerTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageParams.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource manager tags to be bound to the image. |

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktn/provider-google.computeImage.ComputeImageParams.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource manager tags to be bound to the image.

Tag keys and values have the
same definition as resource manager tags. Keys and values can be either in numeric format,
such as tagKeys/{tag_key_id} and tagValues/{tag_value_id} or in namespaced format such as
{org_id|projectId}/{tag_key_short_name} and {tag_value_short_name}. The field is ignored when empty.
The field is immutable and causes resource replacement when mutated. This field is only
set at create time and modifying this field after creation will trigger recreation.
To apply tags to an existing resource, see the google_tags_tag_binding resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#resource_manager_tags ComputeImage#resource_manager_tags}

---

### ComputeImageRawDisk <a name="ComputeImageRawDisk" id="@cdktn/provider-google.computeImage.ComputeImageRawDisk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeImage.ComputeImageRawDisk.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageRawDisk;

ComputeImageRawDisk.builder()
    .source(java.lang.String)
//  .containerType(java.lang.String)
//  .sha1(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDisk.property.source">source</a></code> | <code>java.lang.String</code> | The full Google Cloud Storage URL where disk storage is stored You must provide either this property or the sourceDisk property but not both. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDisk.property.containerType">containerType</a></code> | <code>java.lang.String</code> | The format used to encode and transmit the block device, which should be TAR. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDisk.property.sha1">sha1</a></code> | <code>java.lang.String</code> | An optional SHA1 checksum of the disk image before unpackaging. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.computeImage.ComputeImageRawDisk.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

The full Google Cloud Storage URL where disk storage is stored You must provide either this property or the sourceDisk property but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#source ComputeImage#source}

---

##### `containerType`<sup>Optional</sup> <a name="containerType" id="@cdktn/provider-google.computeImage.ComputeImageRawDisk.property.containerType"></a>

```java
public java.lang.String getContainerType();
```

- *Type:* java.lang.String

The format used to encode and transmit the block device, which should be TAR.

This is just a container and transmission format
and not a runtime format. Provided by the client when the disk
image is created. Default value: "TAR" Possible values: ["TAR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#container_type ComputeImage#container_type}

---

##### `sha1`<sup>Optional</sup> <a name="sha1" id="@cdktn/provider-google.computeImage.ComputeImageRawDisk.property.sha1"></a>

```java
public java.lang.String getSha1();
```

- *Type:* java.lang.String

An optional SHA1 checksum of the disk image before unpackaging.

This is provided by the client when the disk image is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#sha1 ComputeImage#sha1}

---

### ComputeImageShieldedInstanceInitialState <a name="ComputeImageShieldedInstanceInitialState" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialState.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageShieldedInstanceInitialState;

ComputeImageShieldedInstanceInitialState.builder()
//  .dbs(IResolvable|java.util.List<ComputeImageShieldedInstanceInitialStateDbs>)
//  .dbxs(IResolvable|java.util.List<ComputeImageShieldedInstanceInitialStateDbxs>)
//  .keks(IResolvable|java.util.List<ComputeImageShieldedInstanceInitialStateKeks>)
//  .pk(ComputeImageShieldedInstanceInitialStatePk)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialState.property.dbs">dbs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs">ComputeImageShieldedInstanceInitialStateDbs</a>></code> | dbs block. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialState.property.dbxs">dbxs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs">ComputeImageShieldedInstanceInitialStateDbxs</a>></code> | dbxs block. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialState.property.keks">keks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks">ComputeImageShieldedInstanceInitialStateKeks</a>></code> | keks block. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialState.property.pk">pk</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk">ComputeImageShieldedInstanceInitialStatePk</a></code> | pk block. |

---

##### `dbs`<sup>Optional</sup> <a name="dbs" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialState.property.dbs"></a>

```java
public IResolvable|java.util.List<ComputeImageShieldedInstanceInitialStateDbs> getDbs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs">ComputeImageShieldedInstanceInitialStateDbs</a>>

dbs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#dbs ComputeImage#dbs}

---

##### `dbxs`<sup>Optional</sup> <a name="dbxs" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialState.property.dbxs"></a>

```java
public IResolvable|java.util.List<ComputeImageShieldedInstanceInitialStateDbxs> getDbxs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs">ComputeImageShieldedInstanceInitialStateDbxs</a>>

dbxs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#dbxs ComputeImage#dbxs}

---

##### `keks`<sup>Optional</sup> <a name="keks" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialState.property.keks"></a>

```java
public IResolvable|java.util.List<ComputeImageShieldedInstanceInitialStateKeks> getKeks();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks">ComputeImageShieldedInstanceInitialStateKeks</a>>

keks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#keks ComputeImage#keks}

---

##### `pk`<sup>Optional</sup> <a name="pk" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialState.property.pk"></a>

```java
public ComputeImageShieldedInstanceInitialStatePk getPk();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk">ComputeImageShieldedInstanceInitialStatePk</a>

pk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#pk ComputeImage#pk}

---

### ComputeImageShieldedInstanceInitialStateDbs <a name="ComputeImageShieldedInstanceInitialStateDbs" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageShieldedInstanceInitialStateDbs;

ComputeImageShieldedInstanceInitialStateDbs.builder()
    .content(java.lang.String)
//  .fileType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs.property.content">content</a></code> | <code>java.lang.String</code> | The raw content in the secure keys file. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs.property.fileType">fileType</a></code> | <code>java.lang.String</code> | The file type of source file. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

The raw content in the secure keys file.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#content ComputeImage#content}

---

##### `fileType`<sup>Optional</sup> <a name="fileType" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs.property.fileType"></a>

```java
public java.lang.String getFileType();
```

- *Type:* java.lang.String

The file type of source file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#file_type ComputeImage#file_type}

---

### ComputeImageShieldedInstanceInitialStateDbxs <a name="ComputeImageShieldedInstanceInitialStateDbxs" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageShieldedInstanceInitialStateDbxs;

ComputeImageShieldedInstanceInitialStateDbxs.builder()
    .content(java.lang.String)
//  .fileType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs.property.content">content</a></code> | <code>java.lang.String</code> | The raw content in the secure keys file. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs.property.fileType">fileType</a></code> | <code>java.lang.String</code> | The file type of source file. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

The raw content in the secure keys file.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#content ComputeImage#content}

---

##### `fileType`<sup>Optional</sup> <a name="fileType" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs.property.fileType"></a>

```java
public java.lang.String getFileType();
```

- *Type:* java.lang.String

The file type of source file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#file_type ComputeImage#file_type}

---

### ComputeImageShieldedInstanceInitialStateKeks <a name="ComputeImageShieldedInstanceInitialStateKeks" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageShieldedInstanceInitialStateKeks;

ComputeImageShieldedInstanceInitialStateKeks.builder()
    .content(java.lang.String)
//  .fileType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks.property.content">content</a></code> | <code>java.lang.String</code> | The raw content in the secure keys file. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks.property.fileType">fileType</a></code> | <code>java.lang.String</code> | The file type of source file. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

The raw content in the secure keys file.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#content ComputeImage#content}

---

##### `fileType`<sup>Optional</sup> <a name="fileType" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks.property.fileType"></a>

```java
public java.lang.String getFileType();
```

- *Type:* java.lang.String

The file type of source file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#file_type ComputeImage#file_type}

---

### ComputeImageShieldedInstanceInitialStatePk <a name="ComputeImageShieldedInstanceInitialStatePk" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageShieldedInstanceInitialStatePk;

ComputeImageShieldedInstanceInitialStatePk.builder()
    .content(java.lang.String)
//  .fileType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk.property.content">content</a></code> | <code>java.lang.String</code> | The raw content in the secure keys file. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk.property.fileType">fileType</a></code> | <code>java.lang.String</code> | The file type of source file. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

The raw content in the secure keys file.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#content ComputeImage#content}

---

##### `fileType`<sup>Optional</sup> <a name="fileType" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk.property.fileType"></a>

```java
public java.lang.String getFileType();
```

- *Type:* java.lang.String

The file type of source file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#file_type ComputeImage#file_type}

---

### ComputeImageSourceDiskEncryptionKey <a name="ComputeImageSourceDiskEncryptionKey" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageSourceDiskEncryptionKey;

ComputeImageSourceDiskEncryptionKey.builder()
//  .kmsKeySelfLink(java.lang.String)
//  .kmsKeyServiceAccount(java.lang.String)
//  .rawKey(java.lang.String)
//  .rsaEncryptedKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | The self link of the encryption key used to decrypt this resource. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | The service account being used for the encryption request for the given KMS key. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey.property.rawKey">rawKey</a></code> | <code>java.lang.String</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey.property.rsaEncryptedKey">rsaEncryptedKey</a></code> | <code>java.lang.String</code> | Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource. |

---

##### `kmsKeySelfLink`<sup>Optional</sup> <a name="kmsKeySelfLink" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

The self link of the encryption key used to decrypt this resource.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#kms_key_self_link ComputeImage#kms_key_self_link}

---

##### `kmsKeyServiceAccount`<sup>Optional</sup> <a name="kmsKeyServiceAccount" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

The service account being used for the encryption request for the given KMS key.

If absent, the Compute Engine default service
account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#kms_key_service_account ComputeImage#kms_key_service_account}

---

##### `rawKey`<sup>Optional</sup> <a name="rawKey" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey.property.rawKey"></a>

```java
public java.lang.String getRawKey();
```

- *Type:* java.lang.String

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#raw_key ComputeImage#raw_key}

---

##### `rsaEncryptedKey`<sup>Optional</sup> <a name="rsaEncryptedKey" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey.property.rsaEncryptedKey"></a>

```java
public java.lang.String getRsaEncryptedKey();
```

- *Type:* java.lang.String

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.

You can provide either the rawKey or the rsaEncryptedKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#rsa_encrypted_key ComputeImage#rsa_encrypted_key}

---

### ComputeImageSourceImageEncryptionKey <a name="ComputeImageSourceImageEncryptionKey" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKey.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageSourceImageEncryptionKey;

ComputeImageSourceImageEncryptionKey.builder()
//  .kmsKeySelfLink(java.lang.String)
//  .kmsKeyServiceAccount(java.lang.String)
//  .rawKey(java.lang.String)
//  .rsaEncryptedKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKey.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | The self link of the encryption key used to decrypt this resource. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKey.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | The service account being used for the encryption request for the given KMS key. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKey.property.rawKey">rawKey</a></code> | <code>java.lang.String</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKey.property.rsaEncryptedKey">rsaEncryptedKey</a></code> | <code>java.lang.String</code> | Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource. |

---

##### `kmsKeySelfLink`<sup>Optional</sup> <a name="kmsKeySelfLink" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKey.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

The self link of the encryption key used to decrypt this resource.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#kms_key_self_link ComputeImage#kms_key_self_link}

---

##### `kmsKeyServiceAccount`<sup>Optional</sup> <a name="kmsKeyServiceAccount" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKey.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

The service account being used for the encryption request for the given KMS key.

If absent, the Compute Engine default service
account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#kms_key_service_account ComputeImage#kms_key_service_account}

---

##### `rawKey`<sup>Optional</sup> <a name="rawKey" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKey.property.rawKey"></a>

```java
public java.lang.String getRawKey();
```

- *Type:* java.lang.String

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#raw_key ComputeImage#raw_key}

---

##### `rsaEncryptedKey`<sup>Optional</sup> <a name="rsaEncryptedKey" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKey.property.rsaEncryptedKey"></a>

```java
public java.lang.String getRsaEncryptedKey();
```

- *Type:* java.lang.String

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.

You can provide either the rawKey or the rsaEncryptedKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#rsa_encrypted_key ComputeImage#rsa_encrypted_key}

---

### ComputeImageSourceSnapshotEncryptionKey <a name="ComputeImageSourceSnapshotEncryptionKey" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageSourceSnapshotEncryptionKey;

ComputeImageSourceSnapshotEncryptionKey.builder()
//  .kmsKeySelfLink(java.lang.String)
//  .kmsKeyServiceAccount(java.lang.String)
//  .rawKey(java.lang.String)
//  .rsaEncryptedKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | The self link of the encryption key used to decrypt this resource. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | The service account being used for the encryption request for the given KMS key. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey.property.rawKey">rawKey</a></code> | <code>java.lang.String</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey.property.rsaEncryptedKey">rsaEncryptedKey</a></code> | <code>java.lang.String</code> | Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource. |

---

##### `kmsKeySelfLink`<sup>Optional</sup> <a name="kmsKeySelfLink" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

The self link of the encryption key used to decrypt this resource.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#kms_key_self_link ComputeImage#kms_key_self_link}

---

##### `kmsKeyServiceAccount`<sup>Optional</sup> <a name="kmsKeyServiceAccount" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

The service account being used for the encryption request for the given KMS key.

If absent, the Compute Engine default service
account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#kms_key_service_account ComputeImage#kms_key_service_account}

---

##### `rawKey`<sup>Optional</sup> <a name="rawKey" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey.property.rawKey"></a>

```java
public java.lang.String getRawKey();
```

- *Type:* java.lang.String

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#raw_key ComputeImage#raw_key}

---

##### `rsaEncryptedKey`<sup>Optional</sup> <a name="rsaEncryptedKey" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey.property.rsaEncryptedKey"></a>

```java
public java.lang.String getRsaEncryptedKey();
```

- *Type:* java.lang.String

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.

You can provide either the rawKey or the rsaEncryptedKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#rsa_encrypted_key ComputeImage#rsa_encrypted_key}

---

### ComputeImageTimeouts <a name="ComputeImageTimeouts" id="@cdktn/provider-google.computeImage.ComputeImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeImage.ComputeImageTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageTimeouts;

ComputeImageTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#create ComputeImage#create}. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#delete ComputeImage#delete}. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#update ComputeImage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeImage.ComputeImageTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#create ComputeImage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeImage.ComputeImageTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#delete ComputeImage#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeImage.ComputeImageTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/compute_image#update ComputeImage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeImageGuestOsFeaturesList <a name="ComputeImageGuestOsFeaturesList" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageGuestOsFeaturesList;

new ComputeImageGuestOsFeaturesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList.get"></a>

```java
public ComputeImageGuestOsFeaturesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeatures">ComputeImageGuestOsFeatures</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ComputeImageGuestOsFeatures> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeatures">ComputeImageGuestOsFeatures</a>>

---


### ComputeImageGuestOsFeaturesOutputReference <a name="ComputeImageGuestOsFeaturesOutputReference" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageGuestOsFeaturesOutputReference;

new ComputeImageGuestOsFeaturesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeatures">ComputeImageGuestOsFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeImage.ComputeImageGuestOsFeaturesOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeImageGuestOsFeatures getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeImage.ComputeImageGuestOsFeatures">ComputeImageGuestOsFeatures</a>

---


### ComputeImageImageEncryptionKeyOutputReference <a name="ComputeImageImageEncryptionKeyOutputReference" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageImageEncryptionKeyOutputReference;

new ComputeImageImageEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resetKmsKeySelfLink">resetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount">resetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resetRawKey">resetRawKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resetRsaEncryptedKey">resetRsaEncryptedKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeySelfLink` <a name="resetKmsKeySelfLink" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```java
public void resetKmsKeySelfLink()
```

##### `resetKmsKeyServiceAccount` <a name="resetKmsKeyServiceAccount" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```java
public void resetKmsKeyServiceAccount()
```

##### `resetRawKey` <a name="resetRawKey" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resetRawKey"></a>

```java
public void resetRawKey()
```

##### `resetRsaEncryptedKey` <a name="resetRsaEncryptedKey" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```java
public void resetRsaEncryptedKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kmsKeySelfLinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kmsKeyServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.rawKeyInput">rawKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">rsaEncryptedKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.rawKey">rawKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.rsaEncryptedKey">rsaEncryptedKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLinkInput`<sup>Optional</sup> <a name="kmsKeySelfLinkInput" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```java
public java.lang.String getKmsKeySelfLinkInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccountInput`<sup>Optional</sup> <a name="kmsKeyServiceAccountInput" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```java
public java.lang.String getKmsKeyServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `rawKeyInput`<sup>Optional</sup> <a name="rawKeyInput" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.rawKeyInput"></a>

```java
public java.lang.String getRawKeyInput();
```

- *Type:* java.lang.String

---

##### `rsaEncryptedKeyInput`<sup>Optional</sup> <a name="rsaEncryptedKeyInput" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```java
public java.lang.String getRsaEncryptedKeyInput();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

---

##### `rawKey`<sup>Required</sup> <a name="rawKey" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.rawKey"></a>

```java
public java.lang.String getRawKey();
```

- *Type:* java.lang.String

---

##### `rsaEncryptedKey`<sup>Required</sup> <a name="rsaEncryptedKey" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```java
public java.lang.String getRsaEncryptedKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKeyOutputReference.property.internalValue"></a>

```java
public ComputeImageImageEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageImageEncryptionKey">ComputeImageImageEncryptionKey</a>

---


### ComputeImageParamsOutputReference <a name="ComputeImageParamsOutputReference" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageParamsOutputReference;

new ComputeImageParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.resetResourceManagerTags">resetResourceManagerTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceManagerTags` <a name="resetResourceManagerTags" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.resetResourceManagerTags"></a>

```java
public void resetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.property.resourceManagerTagsInput">resourceManagerTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageParams">ComputeImageParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceManagerTagsInput`<sup>Optional</sup> <a name="resourceManagerTagsInput" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.property.resourceManagerTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeImage.ComputeImageParamsOutputReference.property.internalValue"></a>

```java
public ComputeImageParams getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageParams">ComputeImageParams</a>

---


### ComputeImageRawDiskOutputReference <a name="ComputeImageRawDiskOutputReference" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageRawDiskOutputReference;

new ComputeImageRawDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.resetContainerType">resetContainerType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.resetSha1">resetSha1</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerType` <a name="resetContainerType" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.resetContainerType"></a>

```java
public void resetContainerType()
```

##### `resetSha1` <a name="resetSha1" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.resetSha1"></a>

```java
public void resetSha1()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.containerTypeInput">containerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.sha1Input">sha1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.containerType">containerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.sha1">sha1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerTypeInput`<sup>Optional</sup> <a name="containerTypeInput" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.containerTypeInput"></a>

```java
public java.lang.String getContainerTypeInput();
```

- *Type:* java.lang.String

---

##### `sha1Input`<sup>Optional</sup> <a name="sha1Input" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.sha1Input"></a>

```java
public java.lang.String getSha1Input();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `containerType`<sup>Required</sup> <a name="containerType" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.containerType"></a>

```java
public java.lang.String getContainerType();
```

- *Type:* java.lang.String

---

##### `sha1`<sup>Required</sup> <a name="sha1" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.sha1"></a>

```java
public java.lang.String getSha1();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeImage.ComputeImageRawDiskOutputReference.property.internalValue"></a>

```java
public ComputeImageRawDisk getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageRawDisk">ComputeImageRawDisk</a>

---


### ComputeImageShieldedInstanceInitialStateDbsList <a name="ComputeImageShieldedInstanceInitialStateDbsList" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageShieldedInstanceInitialStateDbsList;

new ComputeImageShieldedInstanceInitialStateDbsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.get"></a>

```java
public ComputeImageShieldedInstanceInitialStateDbsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs">ComputeImageShieldedInstanceInitialStateDbs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ComputeImageShieldedInstanceInitialStateDbs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs">ComputeImageShieldedInstanceInitialStateDbs</a>>

---


### ComputeImageShieldedInstanceInitialStateDbsOutputReference <a name="ComputeImageShieldedInstanceInitialStateDbsOutputReference" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageShieldedInstanceInitialStateDbsOutputReference;

new ComputeImageShieldedInstanceInitialStateDbsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.resetFileType">resetFileType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileType` <a name="resetFileType" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.resetFileType"></a>

```java
public void resetFileType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.fileTypeInput">fileTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.fileType">fileType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs">ComputeImageShieldedInstanceInitialStateDbs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `fileTypeInput`<sup>Optional</sup> <a name="fileTypeInput" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.fileTypeInput"></a>

```java
public java.lang.String getFileTypeInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `fileType`<sup>Required</sup> <a name="fileType" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.fileType"></a>

```java
public java.lang.String getFileType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeImageShieldedInstanceInitialStateDbs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs">ComputeImageShieldedInstanceInitialStateDbs</a>

---


### ComputeImageShieldedInstanceInitialStateDbxsList <a name="ComputeImageShieldedInstanceInitialStateDbxsList" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageShieldedInstanceInitialStateDbxsList;

new ComputeImageShieldedInstanceInitialStateDbxsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.get"></a>

```java
public ComputeImageShieldedInstanceInitialStateDbxsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs">ComputeImageShieldedInstanceInitialStateDbxs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ComputeImageShieldedInstanceInitialStateDbxs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs">ComputeImageShieldedInstanceInitialStateDbxs</a>>

---


### ComputeImageShieldedInstanceInitialStateDbxsOutputReference <a name="ComputeImageShieldedInstanceInitialStateDbxsOutputReference" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageShieldedInstanceInitialStateDbxsOutputReference;

new ComputeImageShieldedInstanceInitialStateDbxsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.resetFileType">resetFileType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileType` <a name="resetFileType" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.resetFileType"></a>

```java
public void resetFileType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.fileTypeInput">fileTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.fileType">fileType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs">ComputeImageShieldedInstanceInitialStateDbxs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `fileTypeInput`<sup>Optional</sup> <a name="fileTypeInput" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.fileTypeInput"></a>

```java
public java.lang.String getFileTypeInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `fileType`<sup>Required</sup> <a name="fileType" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.fileType"></a>

```java
public java.lang.String getFileType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeImageShieldedInstanceInitialStateDbxs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs">ComputeImageShieldedInstanceInitialStateDbxs</a>

---


### ComputeImageShieldedInstanceInitialStateKeksList <a name="ComputeImageShieldedInstanceInitialStateKeksList" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageShieldedInstanceInitialStateKeksList;

new ComputeImageShieldedInstanceInitialStateKeksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.get"></a>

```java
public ComputeImageShieldedInstanceInitialStateKeksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks">ComputeImageShieldedInstanceInitialStateKeks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ComputeImageShieldedInstanceInitialStateKeks> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks">ComputeImageShieldedInstanceInitialStateKeks</a>>

---


### ComputeImageShieldedInstanceInitialStateKeksOutputReference <a name="ComputeImageShieldedInstanceInitialStateKeksOutputReference" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageShieldedInstanceInitialStateKeksOutputReference;

new ComputeImageShieldedInstanceInitialStateKeksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.resetFileType">resetFileType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileType` <a name="resetFileType" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.resetFileType"></a>

```java
public void resetFileType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.fileTypeInput">fileTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.fileType">fileType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks">ComputeImageShieldedInstanceInitialStateKeks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `fileTypeInput`<sup>Optional</sup> <a name="fileTypeInput" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.fileTypeInput"></a>

```java
public java.lang.String getFileTypeInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `fileType`<sup>Required</sup> <a name="fileType" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.fileType"></a>

```java
public java.lang.String getFileType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeImageShieldedInstanceInitialStateKeks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks">ComputeImageShieldedInstanceInitialStateKeks</a>

---


### ComputeImageShieldedInstanceInitialStateOutputReference <a name="ComputeImageShieldedInstanceInitialStateOutputReference" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageShieldedInstanceInitialStateOutputReference;

new ComputeImageShieldedInstanceInitialStateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putDbs">putDbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putDbxs">putDbxs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putKeks">putKeks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putPk">putPk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resetDbs">resetDbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resetDbxs">resetDbxs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resetKeks">resetKeks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resetPk">resetPk</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDbs` <a name="putDbs" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putDbs"></a>

```java
public void putDbs(IResolvable|java.util.List<ComputeImageShieldedInstanceInitialStateDbs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putDbs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs">ComputeImageShieldedInstanceInitialStateDbs</a>>

---

##### `putDbxs` <a name="putDbxs" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putDbxs"></a>

```java
public void putDbxs(IResolvable|java.util.List<ComputeImageShieldedInstanceInitialStateDbxs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putDbxs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs">ComputeImageShieldedInstanceInitialStateDbxs</a>>

---

##### `putKeks` <a name="putKeks" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putKeks"></a>

```java
public void putKeks(IResolvable|java.util.List<ComputeImageShieldedInstanceInitialStateKeks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putKeks.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks">ComputeImageShieldedInstanceInitialStateKeks</a>>

---

##### `putPk` <a name="putPk" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putPk"></a>

```java
public void putPk(ComputeImageShieldedInstanceInitialStatePk value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.putPk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk">ComputeImageShieldedInstanceInitialStatePk</a>

---

##### `resetDbs` <a name="resetDbs" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resetDbs"></a>

```java
public void resetDbs()
```

##### `resetDbxs` <a name="resetDbxs" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resetDbxs"></a>

```java
public void resetDbxs()
```

##### `resetKeks` <a name="resetKeks" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resetKeks"></a>

```java
public void resetKeks()
```

##### `resetPk` <a name="resetPk" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.resetPk"></a>

```java
public void resetPk()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.dbs">dbs</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList">ComputeImageShieldedInstanceInitialStateDbsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.dbxs">dbxs</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList">ComputeImageShieldedInstanceInitialStateDbxsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.keks">keks</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList">ComputeImageShieldedInstanceInitialStateKeksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.pk">pk</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference">ComputeImageShieldedInstanceInitialStatePkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.dbsInput">dbsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs">ComputeImageShieldedInstanceInitialStateDbs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.dbxsInput">dbxsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs">ComputeImageShieldedInstanceInitialStateDbxs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.keksInput">keksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks">ComputeImageShieldedInstanceInitialStateKeks</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.pkInput">pkInput</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk">ComputeImageShieldedInstanceInitialStatePk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialState">ComputeImageShieldedInstanceInitialState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbs`<sup>Required</sup> <a name="dbs" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.dbs"></a>

```java
public ComputeImageShieldedInstanceInitialStateDbsList getDbs();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbsList">ComputeImageShieldedInstanceInitialStateDbsList</a>

---

##### `dbxs`<sup>Required</sup> <a name="dbxs" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.dbxs"></a>

```java
public ComputeImageShieldedInstanceInitialStateDbxsList getDbxs();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxsList">ComputeImageShieldedInstanceInitialStateDbxsList</a>

---

##### `keks`<sup>Required</sup> <a name="keks" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.keks"></a>

```java
public ComputeImageShieldedInstanceInitialStateKeksList getKeks();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeksList">ComputeImageShieldedInstanceInitialStateKeksList</a>

---

##### `pk`<sup>Required</sup> <a name="pk" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.pk"></a>

```java
public ComputeImageShieldedInstanceInitialStatePkOutputReference getPk();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference">ComputeImageShieldedInstanceInitialStatePkOutputReference</a>

---

##### `dbsInput`<sup>Optional</sup> <a name="dbsInput" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.dbsInput"></a>

```java
public IResolvable|java.util.List<ComputeImageShieldedInstanceInitialStateDbs> getDbsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbs">ComputeImageShieldedInstanceInitialStateDbs</a>>

---

##### `dbxsInput`<sup>Optional</sup> <a name="dbxsInput" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.dbxsInput"></a>

```java
public IResolvable|java.util.List<ComputeImageShieldedInstanceInitialStateDbxs> getDbxsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateDbxs">ComputeImageShieldedInstanceInitialStateDbxs</a>>

---

##### `keksInput`<sup>Optional</sup> <a name="keksInput" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.keksInput"></a>

```java
public IResolvable|java.util.List<ComputeImageShieldedInstanceInitialStateKeks> getKeksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateKeks">ComputeImageShieldedInstanceInitialStateKeks</a>>

---

##### `pkInput`<sup>Optional</sup> <a name="pkInput" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.pkInput"></a>

```java
public ComputeImageShieldedInstanceInitialStatePk getPkInput();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk">ComputeImageShieldedInstanceInitialStatePk</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStateOutputReference.property.internalValue"></a>

```java
public ComputeImageShieldedInstanceInitialState getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialState">ComputeImageShieldedInstanceInitialState</a>

---


### ComputeImageShieldedInstanceInitialStatePkOutputReference <a name="ComputeImageShieldedInstanceInitialStatePkOutputReference" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageShieldedInstanceInitialStatePkOutputReference;

new ComputeImageShieldedInstanceInitialStatePkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.resetFileType">resetFileType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileType` <a name="resetFileType" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.resetFileType"></a>

```java
public void resetFileType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.fileTypeInput">fileTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.fileType">fileType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk">ComputeImageShieldedInstanceInitialStatePk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `fileTypeInput`<sup>Optional</sup> <a name="fileTypeInput" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.fileTypeInput"></a>

```java
public java.lang.String getFileTypeInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `fileType`<sup>Required</sup> <a name="fileType" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.fileType"></a>

```java
public java.lang.String getFileType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePkOutputReference.property.internalValue"></a>

```java
public ComputeImageShieldedInstanceInitialStatePk getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageShieldedInstanceInitialStatePk">ComputeImageShieldedInstanceInitialStatePk</a>

---


### ComputeImageSourceDiskEncryptionKeyOutputReference <a name="ComputeImageSourceDiskEncryptionKeyOutputReference" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageSourceDiskEncryptionKeyOutputReference;

new ComputeImageSourceDiskEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resetKmsKeySelfLink">resetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resetKmsKeyServiceAccount">resetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resetRawKey">resetRawKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resetRsaEncryptedKey">resetRsaEncryptedKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeySelfLink` <a name="resetKmsKeySelfLink" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```java
public void resetKmsKeySelfLink()
```

##### `resetKmsKeyServiceAccount` <a name="resetKmsKeyServiceAccount" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```java
public void resetKmsKeyServiceAccount()
```

##### `resetRawKey` <a name="resetRawKey" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resetRawKey"></a>

```java
public void resetRawKey()
```

##### `resetRsaEncryptedKey` <a name="resetRsaEncryptedKey" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```java
public void resetRsaEncryptedKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kmsKeySelfLinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kmsKeyServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.rawKeyInput">rawKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">rsaEncryptedKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.rawKey">rawKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.rsaEncryptedKey">rsaEncryptedKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey">ComputeImageSourceDiskEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLinkInput`<sup>Optional</sup> <a name="kmsKeySelfLinkInput" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```java
public java.lang.String getKmsKeySelfLinkInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccountInput`<sup>Optional</sup> <a name="kmsKeyServiceAccountInput" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```java
public java.lang.String getKmsKeyServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `rawKeyInput`<sup>Optional</sup> <a name="rawKeyInput" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.rawKeyInput"></a>

```java
public java.lang.String getRawKeyInput();
```

- *Type:* java.lang.String

---

##### `rsaEncryptedKeyInput`<sup>Optional</sup> <a name="rsaEncryptedKeyInput" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```java
public java.lang.String getRsaEncryptedKeyInput();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

---

##### `rawKey`<sup>Required</sup> <a name="rawKey" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.rawKey"></a>

```java
public java.lang.String getRawKey();
```

- *Type:* java.lang.String

---

##### `rsaEncryptedKey`<sup>Required</sup> <a name="rsaEncryptedKey" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```java
public java.lang.String getRsaEncryptedKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKeyOutputReference.property.internalValue"></a>

```java
public ComputeImageSourceDiskEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageSourceDiskEncryptionKey">ComputeImageSourceDiskEncryptionKey</a>

---


### ComputeImageSourceImageEncryptionKeyOutputReference <a name="ComputeImageSourceImageEncryptionKeyOutputReference" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageSourceImageEncryptionKeyOutputReference;

new ComputeImageSourceImageEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resetKmsKeySelfLink">resetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount">resetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resetRawKey">resetRawKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resetRsaEncryptedKey">resetRsaEncryptedKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeySelfLink` <a name="resetKmsKeySelfLink" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```java
public void resetKmsKeySelfLink()
```

##### `resetKmsKeyServiceAccount` <a name="resetKmsKeyServiceAccount" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```java
public void resetKmsKeyServiceAccount()
```

##### `resetRawKey` <a name="resetRawKey" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resetRawKey"></a>

```java
public void resetRawKey()
```

##### `resetRsaEncryptedKey` <a name="resetRsaEncryptedKey" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```java
public void resetRsaEncryptedKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kmsKeySelfLinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kmsKeyServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.rawKeyInput">rawKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">rsaEncryptedKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.rawKey">rawKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKey">rsaEncryptedKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKey">ComputeImageSourceImageEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLinkInput`<sup>Optional</sup> <a name="kmsKeySelfLinkInput" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```java
public java.lang.String getKmsKeySelfLinkInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccountInput`<sup>Optional</sup> <a name="kmsKeyServiceAccountInput" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```java
public java.lang.String getKmsKeyServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `rawKeyInput`<sup>Optional</sup> <a name="rawKeyInput" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.rawKeyInput"></a>

```java
public java.lang.String getRawKeyInput();
```

- *Type:* java.lang.String

---

##### `rsaEncryptedKeyInput`<sup>Optional</sup> <a name="rsaEncryptedKeyInput" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```java
public java.lang.String getRsaEncryptedKeyInput();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

---

##### `rawKey`<sup>Required</sup> <a name="rawKey" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.rawKey"></a>

```java
public java.lang.String getRawKey();
```

- *Type:* java.lang.String

---

##### `rsaEncryptedKey`<sup>Required</sup> <a name="rsaEncryptedKey" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```java
public java.lang.String getRsaEncryptedKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKeyOutputReference.property.internalValue"></a>

```java
public ComputeImageSourceImageEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageSourceImageEncryptionKey">ComputeImageSourceImageEncryptionKey</a>

---


### ComputeImageSourceSnapshotEncryptionKeyOutputReference <a name="ComputeImageSourceSnapshotEncryptionKeyOutputReference" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageSourceSnapshotEncryptionKeyOutputReference;

new ComputeImageSourceSnapshotEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resetKmsKeySelfLink">resetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount">resetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resetRawKey">resetRawKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resetRsaEncryptedKey">resetRsaEncryptedKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeySelfLink` <a name="resetKmsKeySelfLink" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```java
public void resetKmsKeySelfLink()
```

##### `resetKmsKeyServiceAccount` <a name="resetKmsKeyServiceAccount" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```java
public void resetKmsKeyServiceAccount()
```

##### `resetRawKey` <a name="resetRawKey" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resetRawKey"></a>

```java
public void resetRawKey()
```

##### `resetRsaEncryptedKey` <a name="resetRsaEncryptedKey" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```java
public void resetRsaEncryptedKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kmsKeySelfLinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kmsKeyServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rawKeyInput">rawKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">rsaEncryptedKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rawKey">rawKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKey">rsaEncryptedKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey">ComputeImageSourceSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLinkInput`<sup>Optional</sup> <a name="kmsKeySelfLinkInput" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```java
public java.lang.String getKmsKeySelfLinkInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccountInput`<sup>Optional</sup> <a name="kmsKeyServiceAccountInput" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```java
public java.lang.String getKmsKeyServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `rawKeyInput`<sup>Optional</sup> <a name="rawKeyInput" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rawKeyInput"></a>

```java
public java.lang.String getRawKeyInput();
```

- *Type:* java.lang.String

---

##### `rsaEncryptedKeyInput`<sup>Optional</sup> <a name="rsaEncryptedKeyInput" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```java
public java.lang.String getRsaEncryptedKeyInput();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

---

##### `rawKey`<sup>Required</sup> <a name="rawKey" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rawKey"></a>

```java
public java.lang.String getRawKey();
```

- *Type:* java.lang.String

---

##### `rsaEncryptedKey`<sup>Required</sup> <a name="rsaEncryptedKey" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```java
public java.lang.String getRsaEncryptedKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```java
public ComputeImageSourceSnapshotEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeImage.ComputeImageSourceSnapshotEncryptionKey">ComputeImageSourceSnapshotEncryptionKey</a>

---


### ComputeImageTimeoutsOutputReference <a name="ComputeImageTimeoutsOutputReference" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_image.ComputeImageTimeoutsOutputReference;

new ComputeImageTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeImage.ComputeImageTimeouts">ComputeImageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeImage.ComputeImageTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeImageTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeImage.ComputeImageTimeouts">ComputeImageTimeouts</a>

---



